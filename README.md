# Testat-Quiz · Programmieren 1

Richtig/Falsch-Quiz im Stil des Probetestats, zu den Vorlesungen 01–07
(Einführung, Java Grundlagen, Ausdrücke, Verzweigungen und Schleifen,
Statische Methoden I + II, Felder). 292 Aussagen mit Schwierigkeitsgrad,
Lösung und Erklärung.

## Starten

```bash
python3 server.py
```

Der Browser öffnet sich auf <http://localhost:8377>. Alternativ im Finder
`start.command` doppelklicken. Beenden mit `Strg+C` im Terminal.

Ohne Server geht es auch (`index.html` direkt öffnen) – dann werden die
Ergebnisse als Download gespeichert statt im Ordner `ergebnisse/`.

## So funktioniert es

- Lektion wählen (oder „Alle Themen gemischt“), Schwierigkeit und Anzahl einstellen.
- Pro Frage: **Richtig** (`R`) oder **Falsch** (`F`), danach erscheint die Lösung mit Erklärung.
  `Enter` = weiter, `N` = Notizfeld, `Esc` verlässt das Notizfeld.
- Zu jeder Frage kann eine Notiz geschrieben werden – vor oder nach dem Antworten,
  und auch noch auf der Auswertungsseite.
- Falsch beantwortete Fragen werden gemerkt (`fortschritt.json`). Unter
  „Meine Fehler wiederholen“ fliegt eine Frage erst wieder raus, wenn sie dort
  richtig beantwortet wurde.

## Ergebnisse

Am Ende einer Lektion oder bei „Beenden & speichern“ entsteht eine Datei

```
ergebnisse/JJJJ-MM-TT_HH-MM-SS_<lektion>.md
```

mit Zeitstempel, Ergebnis, allen beantworteten Fragen (falsche zuerst), der
eigenen Antwort, der Lösung, der Erklärung und den Notizen. Diese Datei kann
später zum Besprechen hochgeladen werden.

## Fragen ergänzen

Alle Fragen stehen in `questions.js`:

```js
[2, false, `Aussage mit «Inline-Code»`, `Erklärung`, `optionaler Codeblock`],
// Schwierigkeit 1–3, Lösung true = Richtig / false = Falsch
```

Neue Fragen ans Ende eines Themas anhängen, damit die gemerkten Fehler
(IDs wie `t3-17`) gültig bleiben.
