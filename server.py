#!/usr/bin/env python3
"""Kleiner lokaler Server für das Testat-Quiz.

Start:  python3 server.py
Liefert das Quiz unter http://localhost:8377 aus und speichert
- Ergebnisse als Markdown in  ergebnisse/
- die gemerkten Fehler in     fortschritt.json

Benötigt nur die Python-Standardbibliothek. Lauscht ausschließlich auf 127.0.0.1.
"""
import json
import os
import re
import sys
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "ergebnisse")
STATE_FILE = os.path.join(ROOT, "fortschritt.json")
PORT = int(os.environ.get("QUIZ_PORT", "8377"))
MAX_BODY = 2 * 1024 * 1024
SAFE_NAME = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,150}\.md$")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):  # ruhige Konsole
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _local_request(self):
        """Nur Anfragen annehmen, die von dieser Seite selbst kommen."""
        allowed = {"localhost:%d" % PORT, "127.0.0.1:%d" % PORT}
        if self.headers.get("Host", "") not in allowed:
            return False
        origin = self.headers.get("Origin")
        if origin and origin not in {"http://" + h for h in allowed}:
            return False
        return True

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path == "/api/ping":
            return self._json(200, {"ok": True})
        if path == "/api/state":
            try:
                with open(STATE_FILE, encoding="utf-8") as f:
                    return self._json(200, json.load(f))
            except (OSError, ValueError):
                return self._json(200, {"wrong": {}})
        if path.startswith("/.git"):
            return self.send_error(404)
        return super().do_GET()

    def do_POST(self):
        path = self.path.split("?", 1)[0]
        if not self._local_request():
            return self._json(403, {"ok": False, "error": "nur lokal erlaubt"})
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            return self._json(400, {"ok": False, "error": "ungültige Größe"})
        try:
            data = json.loads(self.rfile.read(length).decode("utf-8"))
        except ValueError:
            return self._json(400, {"ok": False, "error": "kein gültiges JSON"})

        if path == "/api/save":
            name = str(data.get("filename", ""))
            content = data.get("content")
            if not SAFE_NAME.match(name) or not isinstance(content, str):
                return self._json(400, {"ok": False, "error": "ungültiger Dateiname oder Inhalt"})
            os.makedirs(OUT_DIR, exist_ok=True)
            target = os.path.join(OUT_DIR, name)
            with open(target, "w", encoding="utf-8") as f:
                f.write(content)
            print("gespeichert: ergebnisse/" + name)
            return self._json(200, {"ok": True, "path": "ergebnisse/" + name})

        if path == "/api/state":
            if not isinstance(data, dict) or not isinstance(data.get("wrong"), dict):
                return self._json(400, {"ok": False, "error": "ungültiger Zustand"})
            with open(STATE_FILE, "w", encoding="utf-8") as f:
                json.dump({"wrong": data["wrong"]}, f, ensure_ascii=False, indent=1)
            return self._json(200, {"ok": True})

        return self._json(404, {"ok": False, "error": "unbekannt"})


def main():
    try:
        httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    except OSError as e:
        print("Port %d ist belegt (%s). Läuft das Quiz schon? Sonst: QUIZ_PORT=8400 python3 server.py" % (PORT, e))
        sys.exit(1)
    url = "http://localhost:%d/" % PORT
    print("Testat-Quiz läuft: " + url)
    print("Ergebnisse landen in: " + OUT_DIR)
    print("Beenden mit Strg+C")
    if "--no-browser" not in sys.argv:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nTschüss!")


if __name__ == "__main__":
    main()
