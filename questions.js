// Fragenpool für das Testat-Quiz (Programmieren 1).
// Format pro Frage: [Schwierigkeit 1-3, Lösung (true = Richtig), Aussage, Erklärung, optionaler Code]
// «…» markiert Inline-Code. Neue Fragen bitte immer ANS ENDE eines Themas anhängen,
// damit die gemerkten Fehler (IDs) gültig bleiben.

const TOPICS = [
  {
    id: "t1",
    title: "01 Einführung",
    sub: "Algorithmus, Von-Neumann, JVM, erstes Programm",
    q: [
      [1, true, `Ein Algorithmus ist eine endliche, geordnete Menge eindeutiger, diskreter, effektiv ausführbarer Schritte.`, `Genau so lautet die Definition aus der Vorlesung.`],
      [1, false, `Der Compiler «javac» übersetzt Java-Quelltext direkt in die Maschinensprache des jeweiligen Prozessors.`, `javac erzeugt plattformunabhängigen Bytecode (.class). Erst die JVM führt diesen auf der jeweiligen Plattform aus.`],
      [1, true, `Java-Bytecode wird von der Java Virtual Machine (JVM) ausgeführt.`, `Java-Programme werden in Bytecode übersetzt und auf der JVM ausgeführt.`],
      [1, false, `Damit ein Java-Programm sowohl unter Windows als auch unter Linux läuft, muss es für jedes Betriebssystem separat kompiliert werden.`, `WORA-Prinzip: Write once, run anywhere. Derselbe Bytecode läuft auf jeder JVM.`],
      [2, true, `Die Anweisung «int x = 2000*2000*2000;» kompiliert, x enthält danach aber nicht den Wert 8 000 000 000.`, `Der Wertebereich von int ist begrenzt (ca. ±2,1 Mrd.). Es kommt zum Überlauf, x ist -589934592.`],
      [2, false, `Addiert man zehnmal den float-Wert «0.1f», erhält man exakt 1.0.`, `0.1 ist binär nicht exakt darstellbar. Das Ergebnis ist 1.0000001 (Quiz aus der Vorlesung).`],
      [1, true, `Eine Variable in Java ist ein Name für eine Speicherstelle, deren Wert sich während des Programmlaufs ändern kann.`, `Im Gegensatz zur Mathematik kann der Wert in jedem Schritt verändert werden.`],
      [2, false, `Die Anweisung «int y = Math.sqrt(2);» kompiliert; die Nachkommastellen werden dabei automatisch abgeschnitten.`, `Math.sqrt liefert double. double → int geht nicht implizit: Compilerfehler. Es bräuchte einen expliziten Cast «(int)».`],
      [1, true, `Ein Datentyp legt den Wertebereich, die Darstellung der Werte und die zulässigen Operationen fest.`, `Das sind die drei Bestandteile eines Datentyps aus der Vorlesung.`],
      [2, false, `Der Stack ist der Speicherbereich für Variablen, deren Lebensdauer der Entwickler selbst festlegt.`, `Umgekehrt: Stack = Lebensdauer wird von Java verwaltet (lokale Variablen). Heap = Lebensdauer legt der Entwickler fest.`],
      [2, true, `In der Von-Neumann-Architektur liegen Daten und Befehle im selben Speicher; die Speicherzellen werden über Adressen angesprochen.`, `Daten und Code werden beide im Speicher abgelegt, jede Zelle hat eine Adresse.`],
      [2, false, `Im Von-Neumann-Zyklus wird der Befehlszähler nach jedem Befehl ausnahmslos um genau eins erhöht.`, `Nur normalerweise. Sprung- und Verzweigungsbefehle verändern den Befehlszähler um andere Werte.`],
      [1, true, `Assembler ist eine für Menschen lesbare Variante der Maschinensprache.`, `Binär kodierte Befehle = Maschinensprache, lesbare Variante = Assembler.`],
      [1, false, `Der Name einer öffentlichen Klasse und der Name der .java-Datei dürfen sich beliebig unterscheiden.`, `Der Klassenname muss dem Dateinamen entsprechen (Klasse Fahrtkosten → Fahrtkosten.java).`],
      [1, true, `Mit «//» beginnt ein Kommentar bis zum Zeilenende, mit «/* ... */» lassen sich auch mehrzeilige Kommentare schreiben.`, `Beide Kommentarformen gibt es in Java.`],
      [1, true, `Bei der Deklaration darf einer Variablen direkt ein Anfangswert zugewiesen werden, z. B. «double cost = 4.80;».`, `Deklaration und Initialisierung dürfen in einer Anweisung stehen.`],
      [2, false, `«scanner.nextInt()» liest eine komplette Textzeile ein und liefert sie als String zurück.`, `nextInt() liest eine ganze Zahl (int). Eine Zeile als String liefert nextLine().`],
      [2, true, `Um «Scanner» ohne vollen Paketnamen zu verwenden, muss die Klasse mit «import java.util.Scanner;» importiert werden.`, `Scanner liegt im Paket java.util und muss importiert werden.`],
      [2, false, `Java ist dynamisch typisiert: Ob die Typen zusammenpassen, wird erst zur Laufzeit geprüft.`, `Java ist statisch typisiert: Die korrekte Typisierung wird zur Compile-Zeit geprüft.`],
      [2, false, `Die Ausführung eines Programms ist in aller Regel eine lineare Abfolge der Anweisungen in der Reihenfolge des Programmtextes.`, `Der Text ist sequentiell, die Ausführung aber selten linear (Schleifen, Verzweigungen, Methodenaufrufe).`],
      [2, true, `Schleifen und Verzweigungen werden im Bytecode durch (bedingte) Sprungbefehle realisiert.`, `while/for/if werden in bedingte Sprünge (goto, if_icmple, …) übersetzt.`],
      [2, false, `Java wurde ab 1990 bei Oracle unter der Leitung von James Gosling entwickelt.`, `Entwickelt wurde Java bei Sun Microsystems (Green Team, Gosling). Oracle hat Sun erst 2010 übernommen.`],
      [3, false, `Die Java-Anweisung «summe = x + y;» entspricht auf Maschinenebene genau einem Befehl.`, `Im Beispiel der Vorlesung sind es drei: load x, add y, store summe.`],
      [1, true, `Die Methode «main» ist der Einstiegspunkt eines Java-Programms.`, `Die Ausführung beginnt immer mit main.`],
      [2, false, `In Java greift man direkt auf Speicheradressen zu und muss nicht mehr benötigten Speicher selbst freigeben.`, `Kein direkter Speicherzugriff, automatische Speicherfreigabe – das zählt zu den Sicherheitsmerkmalen von Java.`],
      [1, true, `«System.out.println("Kosten: " + result1);» gibt den Text, gefolgt vom Wert von result1, und danach einen Zeilenumbruch aus.`, `+ verkettet Text und Wert, println hängt einen Zeilenumbruch an (print nicht).`],
      [2, true, `Pseudocode beschreibt einen Algorithmus in natürlicher, oft strukturierter Sprache; jeder Pseudocode-Befehl lässt sich in echten Code umsetzen.`, `So ist Pseudocode in der Vorlesung definiert.`],
      [3, true, `Beim Vorgehen „von der Aufgabe zum Programm“ kommt das Codieren erst, nachdem die Lösungsidee geprüft und als Algorithmus gefasst wurde.`, `Reihenfolge: verstehen → Lösungsidee → Idee prüfen → Algorithmus → Codieren → Testen.`],
    ],
  },
  {
    id: "t2",
    title: "02 Java Grundlagen",
    sub: "Syntax, Grammatik, Bezeichner, Zahlendarstellung",
    q: [
      [1, true, `Die syntaktische Korrektheit eines Programms lässt sich automatisiert prüfen, z. B. durch den Compiler.`, `Syntax prüft der Compiler; semantische Korrektheit ist viel schwieriger zu zeigen.`],
      [1, false, `Wenn ein Programm fehlerfrei kompiliert, ist es auch semantisch korrekt.`, `Kompilieren zeigt nur syntaktische Korrektheit. Ob das Programm seine Spezifikation erfüllt, ist damit nicht gesagt.`],
      [2, true, `Ein fehlendes Semikolon ist ein syntaktischer Fehler; rechnet das Programm versehentlich «dist1 * dist2» statt «dist1 + dist2», ist das ein semantischer Fehler.`, `Das erste verletzt eine Sprachregel, das zweite die Spezifikation.`],
      [2, true, `Eine Grammatik besteht aus Terminalsymbolen, Nichtterminalsymbolen, Produktionen und einem Startsymbol.`, `Definition 2.1 der Vorlesung.`],
      [2, false, `Nichtterminalsymbole kommen im fertigen Programmtext vor.`, `Nur Terminalsymbole erscheinen im endgültigen Text. Nichtterminale sind Hilfskonstrukte und verschwinden bei der Ableitung.`],
      [2, false, `Das Startsymbol einer Grammatik ist ein Terminalsymbol.`, `Das Startsymbol S ist ein Nichtterminal (S ∈ N).`],
      [3, true, `Mit der folgenden Grammatik (Startsymbol Satz) lässt sich „der Löwe frisst morgens“ ableiten.`, `Satz → Subjekt Prädikat AdverbialeAngabe → ArtikelM SubstantivM … → der Löwe frisst morgens.`, `Satz             := Subjekt Prädikat AdverbialeAngabe
Subjekt          := ArtikelM SubstantivM | ArtikelF SubstantivF
ArtikelM         := der | ein
ArtikelF         := die | eine
SubstantivM      := Löwe | Tiger | Affe
SubstantivF      := Antilope | Giraffe
Prädikat         := schläft | frisst | spielt
AdverbialeAngabe := morgens | oft | am Montag`],
      [3, false, `Mit der folgenden Grammatik (Startsymbol Satz) lässt sich „die Löwe schläft oft“ ableiten.`, `ArtikelF darf nur mit SubstantivF kombiniert werden; Löwe ist ein SubstantivM.`, `Satz             := Subjekt Prädikat AdverbialeAngabe
Subjekt          := ArtikelM SubstantivM | ArtikelF SubstantivF
ArtikelM         := der | ein
ArtikelF         := die | eine
SubstantivM      := Löwe | Tiger | Affe
SubstantivF      := Antilope | Giraffe
Prädikat         := schläft | frisst | spielt
AdverbialeAngabe := morgens | oft | am Montag`],
      [3, true, `Die folgende Grammatik (Startsymbol Satz) erzeugt genau 90 verschiedene Sätze.`, `Subjekt: 2·3 + 2·2 = 10 Möglichkeiten, Prädikat 3, AdverbialeAngabe 3 → 10·3·3 = 90.`, `Satz             := Subjekt Prädikat AdverbialeAngabe
Subjekt          := ArtikelM SubstantivM | ArtikelF SubstantivF
ArtikelM         := der | ein
ArtikelF         := die | eine
SubstantivM      := Löwe | Tiger | Affe
SubstantivF      := Antilope | Giraffe
Prädikat         := schläft | frisst | spielt
AdverbialeAngabe := morgens | oft | am Montag`],
      [1, false, `«2cool4you» ist ein gültiger Java-Bezeichner.`, `Bezeichner dürfen nicht mit einer Ziffer beginnen.`],
      [1, true, `«$e» und «__DAS_IST_COOL__» sind gültige Java-Bezeichner.`, `Bezeichner dürfen mit Buchstabe, Währungssymbol oder Verbindungszeichen (Unterstrich) beginnen.`],
      [2, false, `«Summe» und «summe» bezeichnen in Java dieselbe Variable.`, `Bezeichner sind case-sensitive.`],
      [2, true, `«bóolêáñ» ist ein gültiger Java-Bezeichner.`, `Unicode-Buchstaben sind erlaubt (per Konvention beschränkt man sich aber auf ASCII).`],
      [2, false, `«private» darf als Name einer Variablen verwendet werden.`, `Reservierte Schlüsselwörter sind als Bezeichner verboten.`],
      [1, false, `Java-Bezeichner dürfen höchstens 255 Zeichen lang sein.`, `Bezeichner dürfen theoretisch beliebig lang sein.`],
      [2, false, `«nein danke» ist ein gültiger Bezeichner, weil er nur aus Buchstaben und einem Leerzeichen besteht.`, `Bezeichner dürfen keine Leerzeichen enthalten.`],
      [1, true, `8 Bit ergeben 1 Byte.`, `Ein Bit ist die kleinste Informationseinheit, 8 Bit = 1 Byte.`],
      [2, true, `Die Dezimalzahl 1099 wird binär als 10001001011 dargestellt.`, `1024 + 64 + 8 + 2 + 1 = 1099 (Beispiel aus der Vorlesung, Hornerschema).`],
      [2, false, `Die Dezimalzahl 42 wird hexadezimal als 0x2B dargestellt.`, `42 = 2·16 + 10 = 0x2A. 0x2B wäre 43.`],
      [2, true, `Das Literal «0x1F» hat den Wert 31.`, `1·16 + 15 = 31.`],
      [3, false, `Das Literal «010» hat in Java den Wert 10.`, `Eine führende 0 kennzeichnet ein Oktal-Literal: 010 = 8.`],
      [2, false, `Das Literal «0b1010» hat den Wert 12.`, `0b ist das Präfix für Binärzahlen: 8 + 2 = 10. (12 wäre 0b1100.)`],
      [2, true, `«1_000_000» ist ein gültiges int-Literal.`, `Unterstriche dürfen zur besseren Lesbarkeit in Zahl-Literalen stehen.`],
      [3, true, `Eine Hexadezimalziffer entspricht genau 4 Bit, eine Oktalziffer genau 3 Bit.`, `Deshalb lassen sich Binärzahlen gruppenweise in hex (4er-Gruppen) bzw. oktal (3er-Gruppen) umschreiben.`],
      [2, false, `Negative ganze Zahlen werden in Java mit einem separaten Vorzeichenbit und dem Betrag der Zahl gespeichert.`, `Sie werden im Zweierkomplement gespeichert (invertieren + 1). Das führende Bit zeigt trotzdem das Vorzeichen an.`],
      [3, true, `Im 8-Bit-Zweierkomplement wird -11 als 11110101 dargestellt.`, `11 = 00001011 → invertiert 11110100 → +1 = 11110101.`],
      [2, false, `Der Datentyp «byte» hat den Wertebereich -127 bis 128.`, `8 Bit im Zweierkomplement: -2^7 … 2^7 - 1, also -128 bis 127.`],
      [3, false, `Im 8-Bit-Zweierkomplement steht das Bitmuster 10000000 für -127.`, `10000000 steht für -128 (die kleinste darstellbare Zahl). -127 ist 10000001.`],
      [3, true, `Im 8-Bit-Zweierkomplement steht das Bitmuster 11111111 für -1.`, `Probe: 11111111 + 00000001 = (1)00000000 = 0.`],
      [2, false, `Mit b Bits lassen sich im Zweierkomplement die Zahlen von -2^b bis 2^b - 1 darstellen.`, `Es sind 2^b Zahlen insgesamt: von -2^(b-1) bis 2^(b-1) - 1.`],
      [2, true, `Eine Gleitkommazahl wird im Speicher mit Vorzeichen, Exponent und Mantisse abgelegt.`, `Das sind die drei Teile der normierten Fließpunktdarstellung (IEEE 754).`],
      [2, false, `«float» belegt 64 Bit und «double» 128 Bit.`, `float: 32 Bit (1 + 8 + 23), double: 64 Bit (1 + 11 + 52).`],
      [2, true, `«float» ist auf etwa 7 Dezimalstellen genau, «double» auf gut 15.`, `Die Mantissenlänge (24 bzw. 53 Bit) begrenzt die Genauigkeit.`],
      [3, false, `Die Dezimalzahl 0,8 lässt sich als Binärbruch exakt (mit endlich vielen Stellen) darstellen.`, `0,8 = 0,110011001100…₂ ist periodisch. Nur Summen von Zweierpotenzen enden.`],
      [3, true, `Die Dezimalzahl 0,375 entspricht binär 0,011.`, `0·½ + 1·¼ + 1·⅛ = 0,375.`],
      [3, true, `3,375 lautet normiert im Binärsystem 1,1011 × 2^1.`, `3,375 = 11,011₂; Komma um eine Stelle nach links → Exponent 1.`],
      [2, false, `Die Anweisung «float f = 1.2;» kompiliert.`, `1.2 ist ein double-Literal. Für float braucht man «1.2f» oder einen Cast.`],
      [2, true, `«3e-2» ist ein double-Literal mit dem Wert 0,03.`, `Wissenschaftliche Schreibweise: 3 × 10^-2. Ohne Postfix ist es double.`],
      [1, true, `Java verwendet für Zeichen den Unicode-Zeichensatz.`, `Unicode ist ein weltweiter Standard für Schriftzeichen und Symbole.`],
      [2, false, `UTF-16 kodiert jedes Unicode-Zeichen in genau einem Byte.`, `UTF-16 braucht 2 oder 4 Byte, UTF-8 1 bis 4 Byte.`],
      [2, false, `Die Lexik einer Programmiersprache beschreibt die Bedeutung syntaktisch korrekter Programme.`, `Das ist die Semantik. Die Lexik beschreibt die textuellen Grundbausteine (Schlüsselwörter, Zeichen, Bezeichner).`],
      [3, true, `In der Schreibweise der Java-Spec stehen geschweifte Klammern um einen Teil einer Produktion für beliebig viele (auch null) Wiederholungen, eckige Klammern für „einmal oder keinmal“.`, `A: {σ} entspricht (σ)*, A: [σ] bedeutet optional.`],
      [2, true, `Eine Grammatik heißt kontextfrei, wenn ein Nichtterminal ohne Berücksichtigung seiner Umgebung ersetzt werden darf.`, `Genau das bedeutet „kontextfrei“.`],
      [1, true, `Nach dem Java Code Style beginnen Variablennamen mit einem Kleinbuchstaben und werden in camelCase geschrieben.`, `Z. B. «eineVariableFuerEineReelleZahl».`],
    ],
  },
  {
    id: "t3",
    title: "03 Ausdrücke",
    sub: "Blöcke, Variablen, Operatoren, Typumwandlung, Zuweisungen",
    q: [
      [1, true, `Java kennt acht primitive Datentypen: byte, short, char, int, long, float, double und boolean.`, `Genau diese acht.`],
      [1, false, `«String» ist ein primitiver Datentyp.`, `String ist eine Klasse, also ein Referenzdatentyp.`],
      [1, true, `«int a, b, c = 1;» deklariert drei Variablen, initialisiert wird aber nur c.`, `Die Initialisierung gilt nur für den Deklarator, bei dem sie steht.`],
      [2, false, `Lokale Variablen werden in Java automatisch mit 0 initialisiert.`, `Lokale Variablen müssen vor dem ersten Lesen selbst initialisiert werden.`],
      [2, true, `Der folgende Code führt zu einem Compilerfehler.`, `d wurde nie ein Wert zugewiesen: „variable d may not have been initialized“.`, `short d;
int x;
x = d;`],
      [2, false, `In einem inneren Block darf eine lokale Variable denselben Namen bekommen wie eine lokale Variable des umgebenden Blocks; die innere überdeckt dann die äußere.`, `Das ist in Java verboten: „Duplicate local variable“.`, `int x = 1;
{
    int x = 3;
    System.out.println(x);
}`],
      [2, true, `Der folgende Code kompiliert.`, `Die beiden Blöcke sind nicht verschachtelt. Nach Ende des ersten Blocks existiert y nicht mehr, es darf neu deklariert werden.`, `{
    int y = 2;
    System.out.println(y);
}
{
    int y = 4;
    System.out.println(y);
}`],
      [2, false, `Eine in einem Block deklarierte lokale Variable kann auch nach der schließenden Klammer dieses Blocks noch verwendet werden.`, `Der Block ist der Gültigkeitsbereich. Danach: „cannot be resolved to a variable“.`],
      [1, true, `Konstanten werden mit dem Schlüsselwort «final» deklariert und per Konvention in GROSSBUCHSTABEN geschrieben.`, `Z. B. «final double MWST = 19.0;».`],
      [2, false, `Der folgende Code kompiliert.`, `Einer final-Variablen kann kein neuer Wert zugewiesen werden.`, `final double PI = 3.14;
PI = 3.1415;`],
      [1, true, `Der Ausdruck «7 / 2» ergibt 3.`, `Auf ganzen Zahlen ist die Division ganzzahlig.`],
      [2, false, `Der Ausdruck «17 % 5» ergibt 3.`, `% liefert den Rest der Division: 17 = 3·5 + 2, also 2. Die 3 wäre das Ergebnis von 17 / 5.`],
      [3, true, `Der Ausdruck «-7 / 2» ergibt -3.`, `Die Ganzzahldivision schneidet Richtung 0 ab (nicht abrunden auf -4).`],
      [3, false, `Der Ausdruck «-7 % 3» ergibt 2.`, `In Java hat der Rest das Vorzeichen des linken Operanden: -7 % 3 = -1.`],
      [2, false, `«5/6 * 1.0» und «1.0 * 5/6» liefern denselben Wert.`, `Links: 5/6 ist ganzzahlig 0 → 0.0. Rechts: 1.0*5 = 5.0, dann /6 → 0.8333…`],
      [2, true, `Mit u = 9, v = 3 und w = 8 (alle int) ergibt «u * v / w + v» den Wert 6.`, `27 / 8 = 3 (ganzzahlig), 3 + 3 = 6.`],
      [2, false, `«double x = 1 / 2;» weist x den Wert 0.5 zu.`, `1/2 wird zuerst ganzzahlig berechnet (0), dann zu 0.0 umgewandelt.`],
      [2, true, `Nach diesem Code gilt a == 6 und b == 5.`, `Postinkrement: erst wird der alte Wert geliefert (b = 5), dann a erhöht.`, `int a = 5;
int b = a++;`],
      [2, false, `Nach diesem Code gilt b == 5.`, `Präinkrement: erst wird a erhöht, dann der neue Wert geliefert → b == 6.`, `int a = 5;
int b = ++a;`],
      [3, false, `Nach diesem Code hat i den Wert 6.`, `i++ liefert den alten Wert 5 und erhöht i auf 6; danach wird der alte Wert 5 wieder zugewiesen. i bleibt 5.`, `int i = 5;
i = i++;`],
      [3, true, `Hat i den Wert 2, so ergibt der Ausdruck «(i = 3) * i» den Wert 9.`, `Der linke Operand wird zuerst vollständig ausgewertet (i wird 3), dann 3 * 3.`],
      [3, false, `Hat j den Wert 2, so ergibt der Ausdruck «j * (j = 3)» den Wert 9.`, `Links wird zuerst j gelesen (2), dann rechts zugewiesen: 2 * 3 = 6.`],
      [2, true, `«System.out.println(47 + 35 + "x");» gibt 82x aus.`, `Von links nach rechts: erst int-Addition 82, dann Konkatenation.`],
      [2, false, `«System.out.println("x" + 47 + 35);» gibt x82 aus.`, `"x" + 47 ist schon ein String ("x47"), danach wird 35 angehängt: x4735.`],
      [3, true, `Der folgende Code läuft ohne Fehler durch und b ist danach false.`, `&& ist ein Short-Circuit-Operator: Ist der linke Operand false, wird der rechte (die Division durch 0) nicht mehr ausgewertet.`, `int n = 0;
boolean b = (n != 0) && (10 / n > 1);`],
      [3, false, `Der folgende Code läuft ohne Fehler durch und b ist danach false.`, `& wertet immer beide Operanden aus → Division durch 0 → ArithmeticException zur Laufzeit.`, `int n = 0;
boolean b = (n != 0) & (10 / n > 1);`],
      [2, false, `Die Negation «!» hat eine niedrigere Priorität als «&&» und «||».`, `! bindet stärker als UND und ODER.`],
      [2, false, `Der Ausdruck «true ^ true» ergibt true.`, `^ ist das exklusive ODER: true nur, wenn genau ein Operand true ist. Hier also false.`],
      [2, true, `Der Ausdruck «true || false && false» ergibt true.`, `&& bindet stärker als ||: true || (false && false) = true.`],
      [3, false, `Der Ausdruck «!true || true && false» ergibt true.`, `(!true) || (true && false) = false || false = false.`],
      [1, true, `Vergleichsoperatoren wie «<» oder «==» liefern einen Wert vom Typ boolean.`, `Ein Ausdruck mit Ergebnistyp boolean heißt boolescher Ausdruck.`],
      [2, true, `Mit «(c >= 'A') && (c <= 'Z')» lässt sich prüfen, ob das char c ein Großbuchstabe von A bis Z ist.`, `Vergleichsoperatoren sind auch auf char anwendbar (Vergleich der Zeichencodes).`],
      [3, false, `Der folgende Code kompiliert.`, `Bei ganzzahliger Arithmetik mit byte/short/int ist der Ergebnistyp int. int → byte braucht einen Cast: «(byte) (a + b)».`, `byte a = 1, b = 2;
byte c = a + b;`],
      [2, true, `Der folgende Code kompiliert nicht; es fehlt ein expliziter Cast.`, `long → int kann Werte verlieren und muss explizit gecastet werden: «int z = (int) y;».`, `long y = 5;
int z = y;`],
      [2, true, `Der folgende Code kompiliert ohne expliziten Cast.`, `short → int → long sind Erweiterungen; Java castet implizit.`, `short d = 1;
int x = d;
long y = x;`],
      [2, false, `Nach «int z = (int) 3.99;» hat z den Wert 4.`, `Beim Cast nach int werden die Nachkommastellen abgeschnitten, nicht gerundet: z == 3.`],
      [2, false, `Die Anweisung «byte b = 200;» kompiliert.`, `200 liegt außerhalb des Wertebereichs von byte (-128…127).`],
      [3, true, `Die Anweisung «byte b = 100;» kompiliert, obwohl 100 ein int-Literal ist.`, `Konstante int-Werte, die in den Zielbereich passen, dürfen ohne Cast an byte/short/char zugewiesen werden.`],
      [3, true, `Nach «byte k = (byte) (1 << 7);» hat k den Wert -128.`, `1 << 7 = 128 = 10000000₂. Als byte interpretiert ist das -128.`],
      [3, true, `«-8 >> 1» ergibt -4, «-8 >>> 1» dagegen eine große positive Zahl.`, `>> behält das Vorzeichen bei, >>> füllt links mit Nullen auf.`],
      [3, true, `Der Ausdruck «23 & 0b00001111» ergibt 7.`, `23 = 10111₂; die Bitmaske lässt nur die unteren 4 Bit durch: 0111₂ = 7.`],
      [1, true, `Der Fragezeichen-Operator «? :» ist der einzige dreistellige Operator in Java.`, `Die meisten Operatoren sind ein- oder zweistellig.`],
      [2, false, `«int m = (a < b) ? a : b;» weist m den größeren der beiden Werte zu.`, `Ist a < b wahr, wird a geliefert, sonst b – also immer der kleinere Wert (das Minimum).`],
      [2, false, `Ganzzahl-Literale wie «42» haben den Typ int, Fließkomma-Literale wie «1.0» den Typ float.`, `Fließkomma-Literale ohne Postfix sind double. Für float braucht man das Postfix f («1.0f»).`],
      [3, true, `Ein long kann ohne expliziten Cast einem float zugewiesen werden; dabei kann aber Genauigkeit verloren gehen.`, `In der Typhierarchie gilt long ⊆ float, die Umwandlung ist implizit. float hat aber nur ca. 7 Dezimalstellen Genauigkeit.`],
      [3, true, `Jeder int-Wert lässt sich ohne Genauigkeitsverlust in einen double umwandeln.`, `double hat 53 Bit Mantisse, das reicht für alle 32-Bit-int-Werte (anders als bei float mit 24 Bit).`],
      [3, true, `Der folgende Code kompiliert, und x hat danach den Wert 13.`, `Zusammengesetzte Zuweisungen enthalten einen impliziten Cast: x = (int) (x + 3.7) = (int) 13.7 = 13.`, `int x = 10;
x += 3.7;`],
      [2, true, `Eine Zuweisung ist selbst ein Ausdruck und liefert einen Wert; deshalb ist «a = b = 5;» erlaubt.`, `Erst wird b = 5 ausgewertet (liefert 5), dann a zugewiesen.`],
      [1, false, `Die Anweisung «char c = "a";» kompiliert.`, `"a" ist ein String. char-Literale stehen in einfachen Hochkommata: 'a'.`],
      [3, true, `Nach «int x = 'a' + 1;» hat x den Wert 98.`, `char wird in Arithmetik zu int (Zeichencode von 'a' ist 97).`],
      [2, true, `Die Operanden eines Ausdrucks werden von links nach rechts ausgewertet; der linke Operand ist vollständig ausgewertet, bevor der rechte ausgewertet wird.`, `Diese Reihenfolge ist in Java festgelegt.`],
      [3, true, `Die Zuweisung «float f = y;» mit einer int-Variablen y kompiliert ohne Cast, f kann den Wert von y aber nicht immer exakt darstellen.`, `float hat nur 24 Bit Mantisse. Große int-Werte (z. B. 1024*1024*1024 + 63) werden gerundet.`],
      [2, true, `Mehrere Anweisungen können mit geschweiften Klammern zu einem Block zusammengefasst werden; ein Block ist selbst wieder eine Anweisung.`, `Statement := ; | Block | …`],
      [2, false, `Durch Klammern lässt sich die Auswertungsreihenfolge eines Ausdrucks nicht beeinflussen, es gelten immer die Prioritätsregeln.`, `Durch Klammerung kann jede beliebige Reihenfolge erreicht werden.`],
      [2, true, `Nach diesem Code hat c den Wert 'b'.`, `++ funktioniert auch auf char und erhöht den Zeichencode um 1.`, `char c = 'a';
c++;`],
    ],
  },
  {
    id: "t4",
    title: "04 Verzweigungen und Schleifen",
    sub: "if, switch, for, while, do-while",
    q: [
      [1, true, `Bei einer if-Anweisung ist der else-Teil optional.`, `IfStatement := if (BoolExpression) Statement [else Statement]`],
      [3, true, `Nach diesem Code hat n den Wert 3.`, `Ein else gehört immer zum letzten (innersten) if. a >= b ist wahr, a == b falsch → else-Zweig des inneren if.`, `int a = 5, b = 3, n = 1;
if (a >= b)
    if (a == b) n = 2;
else
    n = 3;`],
      [3, false, `Nach diesem Code hat n den Wert 3.`, `Das else gehört zum inneren if. Da a >= b schon falsch ist, wird gar nichts ausgeführt: n bleibt 1.`, `int a = 2, b = 3, n = 1;
if (a >= b)
    if (a == b) n = 2;
else
    n = 3;`],
      [2, false, `Nach diesem Code hat a den Wert 0.`, `Ohne Block gehört nur «n = 3;» zum else. «a = 6;» wird immer ausgeführt → a == 6.`, `int a = 1, n = 1, b = 5;
if (b > 1)
    a = 0;
else
    n = 3;
    a = 6;`],
      [2, false, `Mit einer int-Variablen x kompiliert «if (x = 5) { ... }».`, `x = 5 ist eine Zuweisung mit Typ int. if verlangt einen booleschen Ausdruck (x == 5).`],
      [2, true, `Zwei double-Werte sollte man in der Regel nicht mit «==» vergleichen, sondern mit «Math.abs(a - b) < epsilon».`, `Wegen der begrenzten Genauigkeit der Fließkommadarstellung.`],
      [2, false, `Der Ausdruck «0.1 + 0.2 == 0.3» ergibt true.`, `0.1 und 0.2 sind binär nicht exakt darstellbar; die Summe ist 0.30000000000000004.`],
      [1, false, `Der folgende Code gibt AB aus.`, `Sobald eine Bedingung zutrifft, werden die weiteren else-if-Zweige übersprungen: Ausgabe A.`, `int x = 7;
if (x > 5) System.out.print("A");
else if (x > 6) System.out.print("B");
else System.out.print("C");`],
      [1, true, `Die switch-Anweisung ist eine Mehrfachverzweigung.`, `Der Ausdruck wird ausgewertet und mit den case-Konstanten verglichen.`],
      [2, false, `Der Ausdruck einer switch-Anweisung darf vom Typ double sein.`, `Erlaubt sind char, byte, short, int (und seit Java 7 String) – keine Fließkommatypen.`],
      [3, false, `Der Ausdruck einer switch-Anweisung darf vom Typ long sein.`, `long ist nicht erlaubt, nur char, byte, short, int und String.`],
      [2, true, `Seit Java 7 darf der Ausdruck einer switch-Anweisung ein String sein.`, `So steht es in der Vorlesung.`],
      [2, true, `Nach diesem Code hat s den Wert "BC".`, `Ohne break wird nach case 2 mit der nächsten Anweisung fortgefahren (Fall-through) – bis zum break hinter case 3.`, `int i = 2;
String s = "";
switch (i) {
    case 1: s += "A";
    case 2: s += "B";
    case 3: s += "C";
            break;
    default: s += "D";
}`],
      [1, false, `Eine switch-Anweisung ohne default-Zweig führt zu einem Compilerfehler.`, `Der default-Zweig ist optional (per Konvention sollte man ihn aber immer schreiben).`],
      [2, true, `Zwei case-Marken mit derselben Konstanten in einer switch-Anweisung sind ein Fehler.`, `Jede Konstante darf nur einmal vorkommen.`],
      [3, false, `Der default-Zweig muss in einer switch-Anweisung als letzter Zweig stehen, sonst kompiliert das Programm nicht.`, `Das ist nur Konvention; syntaktisch darf default überall stehen.`],
      [3, true, `Ist «final int K = 2;» deklariert, dann ist «case K + K:» in einer switch-Anweisung erlaubt.`, `case verlangt eine Konstante. Mit final ist K + K ein konstanter Ausdruck (ohne final nicht, siehe Probetestat).`],
      [1, true, `Der Rumpf einer do-while-Schleife wird mindestens einmal ausgeführt.`, `Die Bedingung wird erst nach dem Rumpf geprüft (durchlaufende Schleife).`],
      [1, false, `Der Rumpf einer while-Schleife wird mindestens einmal ausgeführt.`, `Die while-Schleife ist abweisend: Die Bedingung wird vor dem ersten Durchlauf geprüft.`],
      [1, false, `Eine while-Schleife wird verlassen, sobald ihre Bedingung zu true ausgewertet wird.`, `Umgekehrt: Sie läuft, solange die Bedingung true ist, und endet bei false.`],
      [2, true, `«for (;;) { ... }» kompiliert und ist eine Endlosschleife.`, `Alle drei Teile des for-Kopfes sind optional; ohne Bedingung läuft die Schleife endlos.`],
      [3, true, `Nach dieser Schleife gilt c == -1 und d == 6.`, `Durchläufe (c,d): (4,0)→d=2,c=3 → (3,2)→d=4,c=2 → (2,4)→c=1 → (1,4)→d=6,c=0 → (0,6)→c=-1, Ende.`, `int d = 0, c = 4;
do {
    if (c + d < 6) {
        d += 2;
    }
    c--;
} while (c > -1);`],
      [2, true, `Nach dieser Schleife hat s den Wert 12.`, `Addiert werden die geraden i: 6 + 4 + 2 = 12.`, `int s = 0;
for (int i = 6; i >= 2; i--) {
    if (0 == i % 2) s += i;
}`],
      [2, false, `Der folgende Code gibt 5 aus.`, `Die im for-Kopf deklarierte Laufvariable i existiert nur innerhalb der Schleife: Compilerfehler.`, `int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum += i;
}
System.out.println(i);`],
      [2, true, `Nach diesem Code gilt sum == 6 und n == 0.`, `sum += n-- addiert erst n und verringert es danach: 3 + 2 + 1 = 6.`, `int n = 3, sum = 0;
while (n > 0) sum += n--;`],
      [2, false, `Nach dieser Schleife hat i den Wert 3.`, `Die Schleife endet erst, wenn i <= 3 falsch ist, also bei i == 4 (sum ist 6).`, `int i = 0, sum = 0;
while (i <= 3) {
    sum = sum + i;
    i++;
}`],
      [2, true, `Jede for-Schleife lässt sich in eine gleichwertige while-Schleife umschreiben.`, `for (Init; Expr; Update) Stmt entspricht Init; while (Expr) { Stmt; Update; }`],
      [1, true, `Eine for-Schleife verwendet man typischerweise, wenn die Anzahl der Durchläufe zu Beginn bekannt ist.`, `Konvention: for-Schleifen als Zählschleifen benutzen.`],
      [3, true, `Nach diesem Code hat x den Wert 1.`, `Das Semikolon hinter dem for-Kopf ist der (leere) Schleifenrumpf. Der Block danach wird genau einmal ausgeführt.`, `int x = 0;
for (int i = 0; i < 5; i++);
{
    x++;
}`],
      [2, false, `Nach diesem Code hat count den Wert 9.`, `Die innere Schleife läuft 1 + 2 + 3 = 6 Mal.`, `int count = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        count++;
    }
}`],
      [2, true, `Der folgende Code gibt drei Zeilen aus: 1, 22 und 333.`, `In Zeile i wird die Zahl i genau i-mal ausgegeben.`, `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(i);
    }
    System.out.println();
}`],
      [2, true, `Ein «break» in einer inneren Schleife beendet nur diese innere Schleife, nicht die äußere.`, `break verlässt die innerste umgebende Schleife (oder switch-Anweisung).`],
      [2, false, `«continue» beendet die gesamte Schleife sofort.`, `continue überspringt nur den Rest des aktuellen Durchlaufs; die Schleife läuft weiter. Beenden: break.`],
      [2, true, `«System.out.printf("%5d", 42);» gibt die Zahl 42 rechtsbündig in einem 5 Zeichen breiten Feld aus.`, `%5d = ganze Zahl mit 5 Stellen Breite.`],
      [2, true, `Das Format «%7.3f» gibt eine Gleitkommazahl mit insgesamt 7 Stellen aus, davon 3 Nachkommastellen.`, `Beispiel aus der Vorlesung zur Multiplikationstafel.`],
      [1, false, `«"Hallo".charAt(1)» liefert das Zeichen 'H'.`, `Gezählt wird ab 0: charAt(0) ist 'H', charAt(1) ist 'a'.`],
      [2, false, `«"Hallo".charAt(5)» liefert das Zeichen 'o'.`, `Gültige Indizes sind 0 bis 4. charAt(5) wirft eine StringIndexOutOfBoundsException.`],
      [2, true, `Nach diesem Code hat reverse den Wert "cba".`, `Die Schleife läuft vom letzten Zeichen zum ersten und hängt die Zeichen an.`, `String original = "abc", reverse = "";
for (int i = original.length() - 1; i >= 0; i--)
    reverse = reverse + original.charAt(i);`],
      [3, true, `Der folgende Schleifenkopf kompiliert, und der Rumpf wird genau 5-mal ausgeführt.`, `ForInit und ForUpdate dürfen mehrere, durch Komma getrennte Teile haben. (i,j): (0,10), (1,9), (2,8), (3,7), (4,6); bei (5,5) ist Schluss.`, `for (int i = 0, j = 10; i < j; i++, j--) {
    // ...
}`],
      [3, true, `Die folgende Schleife terminiert nicht.`, `i nimmt nur gerade Werte an (auch nach dem int-Überlauf) und wird nie 7.`, `for (int i = 0; i != 7; i += 2) {
    // i wird im Rumpf nicht verändert
}`],
      [2, true, `Nach dieser Schleife hat i den Wert -2.`, `10 → 7 → 4 → 1 → -2; erst dann ist i > 0 falsch.`, `int i = 10;
while (i > 0) {
    i -= 3;
}`],
      [2, true, `Mit jeder der drei Schleifenarten (for, while, do-while) lässt sich eine Endlosschleife programmieren.`, `while (true) {…}, for (;;) {…}, do {…} while (true);`],
      [2, false, `Bei einer do-while-Schleife wird die Schleife verlassen, wenn die Bedingung hinter while erfüllt ist.`, `Ist die Bedingung erfüllt (true), wird der Rumpf erneut durchlaufen. Verlassen wird bei false.`],
      [3, false, `Der folgende Code gibt 0 aus.`, `Der Rumpf einer do-while-Schleife läuft mindestens einmal: sum ist 5 (n danach 4, Bedingung 4 > 10 falsch).`, `int n = 5, sum = 0;
do {
    sum += n;
    n--;
} while (n > 10);
System.out.println(sum);`],
    ],
  },
  {
    id: "t5",
    title: "05 Statische Methoden I",
    sub: "Methoden, Parameter, Rückgabewerte, Call-by-Value",
    q: [
      [1, true, `Der Rückgabetyp «void» bedeutet, dass eine Methode keinen Wert zurückgibt.`, `Statt void kann ein Typ wie int stehen, dann braucht die Methode return.`],
      [1, false, `Eine Methode mit Rückgabetyp int darf enden, ohne dass eine return-Anweisung ausgeführt wurde.`, `Auf jedem möglichen Ausführungspfad muss ein return stehen; das prüft der Compiler.`],
      [2, true, `Formale Parameter stehen in der Deklaration der Methode, aktuelle Parameter sind die Ausdrücke, die beim Aufruf übergeben werden.`, `Bei printMax(int x, int y) sind x, y formal; bei printMax(100, 2 * i) sind 100 und 2 * i aktuell.`],
      [2, false, `Beim Aufruf «printMax(100, 2 * i);» sind «100» und «2 * i» die formalen Parameter.`, `Das sind die aktuellen Parameter. Formale Parameter sind x und y in der Deklaration.`],
      [2, false, `Das folgende Programm gibt 6 aus.`, `Call-by-Value: inc erhält eine Kopie des Werts. Die Änderung von x wirkt sich nicht auf a aus → Ausgabe 5.`, `public static void inc(int x) {
    x = x + 1;
}

public static void main(String[] args) {
    int a = 5;
    inc(a);
    System.out.println(a);
}`],
      [2, true, `Eine Java-Methode kann höchstens einen Rückgabewert haben.`, `Mehrere Ergebnisse müssen zu einer Einheit (Objekt, Feld) zusammengefasst werden.`],
      [2, true, `Der Rückgabewert einer Methode darf ignoriert werden, z. B. durch den Aufruf «calcMax(a, b);» als eigene Anweisung.`, `Der Methodenaufruf wird dann als Anweisung verwendet.`],
      [2, true, `«calcMax(calcMax(a, b), calcMax(c, d))» bestimmt das Maximum von vier Zahlen.`, `Ein Methodenaufruf mit Rückgabewert darf überall stehen, wo ein Wert dieses Typs erlaubt ist – auch als Argument.`],
      [3, false, `Die folgende Methode kompiliert.`, `Für x == 0 gibt es keinen return. Der Compiler meldet einen Fehler (fehlende return-Anweisung).`, `public static int sign(int x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    }
}`],
      [2, false, `Das folgende Programm gibt 17 aus.`, `sum(3, 10) = 13; danach sum(sum(3, 4), 13) = sum(7, 13) = 20.`, `public static int sum(int x, int y) {
    int result = x + y;
    return result;
}

public static void main(String[] args) {
    int x = 3, z = 4, result;
    result = sum(x, 10);
    result = sum(sum(x, z), result);
    System.out.println(result);
}`],
      [1, true, `Beim Start eines Programms wird immer zuerst die main-Methode ausgeführt.`, `main ist der Einstiegspunkt.`],
      [1, false, `Eine Klasse darf neben main höchstens eine weitere Methode enthalten.`, `Eine Klasse kann beliebig viele Methoden haben.`],
      [1, true, `Methodennamen beginnen per Konvention mit einem Kleinbuchstaben und enthalten oft ein Verb, z. B. «zaehlePunkte».`, `Namenskonvention für Methoden (camelCase).`],
      [2, false, `Formale Parameter einer Methode sind auch nach dem Ende der Methode im Aufrufer sichtbar.`, `Formale Parameter sind lokal zur Methode und existieren nur während des Aufrufs.`],
      [2, true, `Die Argumente eines Methodenaufrufs werden von links nach rechts ausgewertet, bevor der Rumpf der Methode ausgeführt wird.`, `Die Werte werden berechnet und als Kopien auf den Stack gelegt.`],
      [3, true, `Nach diesem Code gilt r == -1.`, `Argumente von links nach rechts: erstes i++ liefert 1, zweites liefert 2 → f(1, 2) = -1 (i ist danach 3).`, `public static int f(int a, int b) {
    return a - b;
}
// ...
int i = 1;
int r = f(i++, i++);`],
      [2, true, `Eine Methode «static void p(double d)» kann mit «p(3)» aufgerufen werden.`, `Der aktuelle Parameter muss zuweisungskompatibel sein; int → double geht implizit.`],
      [2, false, `Eine Methode «static void p(int n)» kann mit «p(3.0)» aufgerufen werden.`, `double → int ist nicht zuweisungskompatibel (Cast nötig): Compilerfehler.`],
      [1, false, `Nach der Ausführung einer return-Anweisung werden die restlichen Anweisungen der Methode noch abgearbeitet.`, `return beendet die Methode sofort.`],
      [3, true, `Auch eine void-Methode darf eine return-Anweisung enthalten, allerdings ohne Wert: «return;».`, `Damit lässt sich eine void-Methode vorzeitig verlassen.`],
      [2, false, `Ist «printHeader» eine void-Methode, dann kompiliert «int x = printHeader();» und x erhält den Wert 0.`, `Eine void-Methode liefert keinen Wert, der zugewiesen werden könnte: Compilerfehler.`],
      [1, true, `Der Aufruf gaussSum(4) liefert 10.`, `0 + 1 + 2 + 3 + 4 = 10.`, `public static int gaussSum(int n) {
    int i = 0, sum = 0;
    while (i <= n) {
        sum = sum + i;
        i++;
    }
    return sum;
}`],
      [2, true, `Beim Aufruf einer Methode werden ihre Parameter und lokalen Variablen auf dem Stack angelegt und nach dem Ende der Methode wieder freigegeben.`, `Semantik von Methodenaufrufen (Stackmodell).`],
      [1, true, `Ruft P die Methode Q auf und Q die Methode R, dann wird nach dem Ende von R die Ausführung von Q fortgesetzt.`, `Und wenn Q terminiert, geht es in P weiter.`],
      [2, true, `Nach diesem Code gilt a == 4 und b == 8.`, `Die Methode ändert nur ihre Kopie x; zurückgegeben wird 8.`, `public static int twice(int x) {
    x = x * 2;
    return x;
}
// ...
int a = 4;
int b = twice(a);`],
      [1, false, `Eine Methode ohne Parameter wird ohne Klammern aufgerufen: «printHeader;».`, `Die runden Klammern gehören immer zum Aufruf: «printHeader();».`],
      [1, true, `Eine mit «private» deklarierte Methode kann nur innerhalb ihrer eigenen Klasse aufgerufen werden.`, `public: auch von außerhalb der Klasse aufrufbar.`],
      [2, true, `Formale Parameter dürfen denselben Namen haben wie Variablen, die im Aufrufer deklariert sind.`, `Sie sind lokal zur Methode und unabhängig von den Variablen des Aufrufers.`],
      [3, false, `Der Aufruf half(5) liefert 2.5.`, `n / 2 wird ganzzahlig berechnet (2) und erst danach in double umgewandelt: 2.0.`, `public static double half(int n) {
    return n / 2;
}`],
      [2, true, `Der Typ jedes formalen Parameters muss im Methodenkopf angegeben werden; mehrere Parameter werden durch Kommas getrennt.`, `Z. B. «printMax(int x, int y)».`],
      [2, true, `Derselbe Methodenrumpf kann an verschiedenen Stellen des Programms mit unterschiedlichen aktuellen Parametern ausgeführt werden.`, `Das ist der Zweck von Methoden: Struktur und Wiederverwendbarkeit.`],
      [3, true, `Das folgende Programm gibt zuerst 1 und dann 2 aus.`, `Das Argument wird vor dem Aufruf ausgewertet: a++ liefert 1 (das bekommt show), danach ist a bereits 2.`, `public static void show(int x) {
    System.out.println(x);
}

public static void main(String[] args) {
    int a = 1;
    show(a++);
    System.out.println(a);
}`],
    ],
  },
  {
    id: "t6",
    title: "06 Statische Methoden II",
    sub: "Global/lokal, Sichtbarkeit, Überladen, Referenzparameter, Rekursion",
    q: [
      [1, true, `Eine Variable heißt global, wenn sie außerhalb aller Methoden auf Ebene der Klasse deklariert wurde.`, `Z. B. «private static int a;» direkt in der Klasse.`],
      [2, true, `Globale Variablen existieren während des gesamten Programmlaufs.`, `Ihr Speicher wird beim Programmstart angelegt und erst beim Terminieren freigegeben.`],
      [2, false, `Lokale Variablen einer Methode behalten ihren Wert zwischen zwei Aufrufen dieser Methode.`, `Bei jedem Aufruf wird neuer Speicher angelegt und am Ende wieder freigegeben.`],
      [2, true, `Das folgende Programm gibt 35 aus.`, `Die globale Variable sum behält ihren Wert über alle Aufrufe: 3 + 17 + 15 = 35.`, `public class Program {
    private static int sum = 0;

    public static void add(int x) {
        sum = sum + x;
    }

    public static void main(String[] args) {
        add(3);
        add(17);
        add(15);
        System.out.println(sum);
    }
}`],
      [2, false, `Das folgende Programm gibt 1 aus.`, `Das lokale x in p überdeckt das globale x. Verändert wird nur das lokale; main gibt das globale aus: 15.`, `public class V {
    private static int x = 15;

    public static void p() {
        int x = 0;
        x++;
    }

    public static void main(String[] args) {
        p();
        System.out.println(x);
    }
}`],
      [3, true, `Nach Ablauf von main hat die globale Variable y den Wert 105.`, `methodP(15): das lokale x läuft von 0 bis 14, sum = 0 + 1 + … + 14 = 105. Das y im Schleifenblock ist lokal; «y = sum;» danach meint das globale y.`, `public class Visibility {
    private static int x = 15;
    private static int y = 0;

    public static void methodQ() {
        int a = y;
        methodP(x);
    }

    public static void methodP(int par) {
        int x = 0, sum = 0;
        while (x < par) {
            int y = x;
            sum += y;
            x++;
        }
        y = sum;
    }

    public static void main(String[] args) {
        methodQ();
    }
}`],
      [2, true, `Die Sichtbarkeit einer Variablen ist eine statische Eigenschaft (Compile-Zeit), ihre Lebensdauer eine dynamische (Laufzeit).`, `Sichtbarkeit prüft der Compiler; Speicher wird erst bei der Ausführung angelegt.`],
      [2, false, `Die Lebensdauer einer Variablen wird zur Compile-Zeit geprüft, ihre Sichtbarkeit ergibt sich erst zur Laufzeit.`, `Genau umgekehrt.`],
      [2, true, `Die lokalen Variablen eines Methodenaufrufs werden auf dem Stack zu einem Frame zusammengefasst; der Stack arbeitet nach dem LIFO-Prinzip.`, `Last In, First Out: Der zuletzt angelegte Frame wird zuerst wieder abgebaut.`],
      [1, false, `In Java kann man innerhalb einer Methode eine weitere Methode deklarieren.`, `In einer Methode kann man Variablen und Konstanten deklarieren, aber keine neuen Methoden.`],
      [2, true, `Eine Methode darf in einer anderen Methode aufgerufen werden, auch wenn sie im Quelltext erst weiter unten deklariert ist.`, `Methodennamen sind auch in Methoden sichtbar, die vor ihrer Deklaration liegen.`],
      [2, true, `Überladen bedeutet: Mehrere Methoden tragen denselben Namen, unterscheiden sich aber in Anzahl oder Typ der Parameter.`, `Beispiel: System.out.print(int), print(char), print(String) …`],
      [3, false, `Zwei Methoden einer Klasse dürfen denselben Namen und dieselben Parametertypen haben, solange sich ihr Rückgabetyp unterscheidet.`, `Der Rückgabetyp reicht zur Unterscheidung nicht aus; Anzahl oder Typen der Parameter müssen verschieden sein.`],
      [2, false, `«void m(int a)» und «void m(int b)» dürfen gemeinsam in einer Klasse stehen, weil sich die Parameternamen unterscheiden.`, `Parameternamen spielen fürs Überladen keine Rolle, nur Anzahl und Typen.`],
      [2, true, `Gibt es «myMethod(int i)», «myMethod(double d)» und «myMethod(String s)», dann wählt der Compiler beim Aufruf «myMethod(3.14)» die double-Variante.`, `Der Compiler vergleicht die Signaturen mit den aktuellen Parametern.`],
      [2, false, `Gibt es «m(int i)» und «m(double d)», dann ruft «m(5)» die double-Variante auf.`, `5 ist ein int-Literal; die exakt passende int-Variante wird gewählt.`],
      [2, true, `Eine Methode hat einen Nebeneffekt, wenn sie z. B. eine globale Variable verändert oder etwas auf dem Bildschirm ausgibt.`, `Bei Methoden mit Rückgabewert sollte man Nebeneffekte vermeiden oder dokumentieren.`],
      [2, false, `Laut Vorlesung sollte man globale Variablen gegenüber lokalen bevorzugen.`, `Umgekehrt: Lokale Variablen bevorzugen – besser verständlich und nicht von anderen Methoden veränderbar.`],
      [2, false, `Im folgenden Programm ist bfeld nach dem Aufruf unverändert, weil Java Parameter per Call-by-Value übergibt.`, `Kopiert wird nur die Referenz. afeld und bfeld zeigen auf dasselbe Feld; dessen Einträge werden verändert: bfeld ist {3, 6, 9}.`, `static int[] scaleModify(int[] afeld, int scale) {
    for (int i = 0; i < afeld.length; i++) {
        afeld[i] *= scale;
    }
    return afeld;
}

public static void main(String[] args) {
    int[] bfeld = { 1, 2, 3 };
    int[] cfeld = scaleModify(bfeld, 3);
}`],
      [2, true, `Im folgenden Programm ist bfeld nach dem Aufruf unverändert.`, `scale erzeugt ein neues Feld und schreibt nur dort hinein.`, `static int[] scale(int[] afeld, int scale) {
    int[] rfeld = new int[afeld.length];
    for (int i = 0; i < afeld.length; i++) {
        rfeld[i] = scale * afeld[i];
    }
    return rfeld;
}

public static void main(String[] args) {
    int[] bfeld = { 1, 2, 3 };
    int[] cfeld = scale(bfeld, 3);
}`],
      [3, true, `Das folgende Programm gibt 1 aus.`, `Die Referenz wird als Kopie übergeben. «f = new int[3]» ändert nur die lokale Kopie; a zeigt weiter auf {1, 2, 3}.`, `static void reset(int[] f) {
    f = new int[3];
}

public static void main(String[] args) {
    int[] a = { 1, 2, 3 };
    reset(a);
    System.out.println(a[0]);
}`],
      [2, false, `Felder liegen auf dem Stack und werden am Ende der Methode, in der sie erzeugt wurden, automatisch freigegeben.`, `Referenzdatentypen liegen auf dem Heap. Sie können das Ende der Methode überleben, z. B. wenn die Referenz zurückgegeben wird. Auf dem Stack liegt nur die Referenz.`],
      [1, true, `Eine Methode, die sich selbst aufruft, nennt man rekursiv.`, `Direkte Rekursion: Aufruf im eigenen Rumpf.`],
      [1, true, `Ruft Methode a die Methode b auf und b wiederum a, spricht man von indirekter Rekursion.`, `Auch wechselseitige Rekursion genannt.`],
      [2, true, `Der Aufruf factRec(4) liefert 24.`, `4 · 3 · 2 · 1 = 24.`, `public static long factRec(int n) {
    if (n == 1)
        return 1;
    else
        return factRec(n - 1) * n;
}`],
      [3, false, `Der Aufruf factRec(0) liefert 1.`, `Die Abbruchbedingung n == 1 wird nie erreicht (0, -1, -2, …). Die Rekursion endet mit einem StackOverflowError.`, `public static long factRec(int n) {
    if (n == 1)
        return 1;
    else
        return factRec(n - 1) * n;
}`],
      [2, true, `Eine Rekursion ohne erreichbare Abbruchbedingung endet in Java mit einem Stack Overflow.`, `Jeder Aufruf legt einen Frame auf den Stack, dessen Größe begrenzt ist.`],
      [2, false, `Rekursive Lösungen sind grundsätzlich effizienter als iterative.`, `Die iterative Lösung ist oft effizienter, weil Methodenaufrufe (Frames) Zeit kosten. Rekursion ist dafür oft eleganter.`],
      [2, true, `Jede rekursive Lösung lässt sich auch iterativ formulieren und umgekehrt.`, `Iteration und Rekursion sind gleich ausdrucksmächtig.`],
      [3, true, `Der Aufruf moveTowers(4, 'A', 'B', 'C') gibt genau 15 Zeilen aus.`, `Für n Scheiben braucht man 2^n - 1 Züge: 2^4 - 1 = 15.`, `public static void moveTowers(int n, char from, char inter, char to) {
    if (n == 1) {
        System.out.println("Disk 1 from " + from + " to " + to);
    } else {
        moveTowers(n - 1, from, to, inter);
        System.out.println("Disk " + n + " from " + from + " to " + to);
        moveTowers(n - 1, inter, from, to);
    }
}`],
      [3, false, `Der Aufruf f(5) liefert 5.`, `f(0)=1, f(1)=1, f(2)=2, f(3)=3, f(4)=5, f(5)=8. Die 5 ist der Wert von f(4).`, `public static int f(int n) {
    if (n <= 1) return 1;
    return f(n - 1) + f(n - 2);
}`],
      [3, false, `Der Aufruf count(3) gibt „3 2 1 “ aus.`, `Die Ausgabe steht nach dem rekursiven Aufruf, also erst beim Rückweg: „1 2 3 “.`, `public static void count(int n) {
    if (n == 0) return;
    count(n - 1);
    System.out.print(n + " ");
}`],
      [3, true, `Für a = {3, 5, 9, 12, 13, 21, 25} liefert binSearch(21, a, 0, 6) den Wert 5 und benötigt dafür insgesamt zwei Aufrufe von binSearch.`, `1. Aufruf: m = 3, a[3] = 12 < 21 → rechts weiter. 2. Aufruf (4, 6): m = 5, a[5] = 21 → gefunden.`, `public static int binSearch(int elem, int[] a, int first, int last) {
    int m = (first + last) / 2;
    if (first > last)
        return -1;
    else if (elem == a[m])
        return m;
    else if (elem < a[m])
        return binSearch(elem, a, first, m - 1);
    else
        return binSearch(elem, a, m + 1, last);
}`],
      [3, false, `Der Aufruf factIter(25) liefert das mathematisch korrekte Ergebnis, weil mit long gerechnet wird.`, `Auch long ist begrenzt: Ab 21! läuft long über. Kein Stack-Problem, aber ein Überlauf-Problem.`, `public static long factIter(int n) {
    long f = 1;
    for (int i = 2; i <= n; i++) {
        f = f * i;
    }
    return f;
}`],
      [2, true, `Beim Backtracking im Labyrinth werden besuchte Felder markiert, damit dieselbe Position nicht immer wieder betreten wird.`, `canExit markiert Felder mit '-' und liefert für Mauern und besuchte Felder false.`],
      [3, true, `Eine globale Variable «private static int g;» ohne Initialisierung hat den Wert 0.`, `Anders als lokale Variablen werden globale (Klassen-)Variablen automatisch mit dem Default-Wert initialisiert.`],
      [2, true, `Im folgenden Programm existieren an der Stelle (3) die Variablen m, b und a gleichzeitig auf dem Stack.`, `main → methB → methA: Die Frames aller noch laufenden Methoden liegen übereinander.`, `public class Program {
    private static int g;

    public static void methA() {
        int a;
        // (3)
    }

    public static void methB() {
        int b;
        methA();
    }

    public static void main(String[] args) {
        int m;
        methB();
    }
}`],
      [2, true, `Konstanten (final) dürfen sowohl lokal in einer Methode als auch global in der Klasse deklariert werden.`, `Üblicher ist die globale Deklaration.`],
      [2, false, `Eine globale Variable ist nur in der Methode sichtbar, die im Quelltext direkt nach ihrer Deklaration steht.`, `Globale Variablen sind in allen Methoden der Klasse sichtbar.`],
      [2, false, `Bei einer rekursiven Methode teilen sich alle Aufrufe dieselben Speicherzellen für Parameter und lokale Variablen.`, `Jeder Aufruf bekommt einen eigenen Frame auf dem Stack – also eigene Parameter und lokale Variablen.`],
    ],
  },
  {
    id: "t7",
    title: "07 Felder",
    sub: "Referenztypen, Arrays, for-each, mehrdimensional, Suchen, Javadoc",
    q: [
      [1, true, `Die Elemente eines Feldes der Länge n haben die Indizes 0 bis n - 1.`, `Der Index beginnt bei 0.`],
      [1, false, `Nach «int[] a = new int[5];» ist «a[5]» das letzte Element des Feldes.`, `Das letzte Element ist a[4]. a[5] führt zu einer ArrayIndexOutOfBoundsException.`],
      [2, true, `Nach «int[] a = new int[10];» haben alle Elemente den Wert 0.`, `Feldelemente werden default-initialisiert: Ganzzahlen 0, double 0.0, boolean false, Referenzen null.`],
      [2, false, `Nach «double[] d = new double[3];» sind die Elemente uninitialisiert; ein lesender Zugriff auf «d[0]» führt zu einem Compilerfehler.`, `Feldelemente werden automatisch initialisiert (hier 0.0). Nur lokale Variablen selbst müssen initialisiert werden.`],
      [2, true, `Die Deklaration «int zahlen[];» ist in Java erlaubt, aber unerwünscht.`, `Bevorzugt wird «int[] zahlen;».`],
      [2, false, `«int[5] a;» ist eine gültige Felddeklaration.`, `Die Größe ist nicht Teil der Typ-Deklaration; sie wird erst bei der Erzeugung mit new festgelegt.`],
      [2, true, `Die Größe eines Feldes muss nicht zur Compile-Zeit feststehen; «new double[n]» mit einer eingelesenen int-Variablen n ist erlaubt.`, `Die Länge darf ein beliebiger Ausdruck sein, der eine nichtnegative int ergibt.`],
      [2, false, `Die Länge eines Feldes lässt sich nach der Erzeugung mit «a.length = 10;» ändern.`, `Die Länge eines Feldes ist fest. Man kann der Variablen nur ein neues Feld zuweisen.`],
      [2, false, `Die Länge eines Feldes a erhält man mit «a.length()».`, `Bei Feldern ohne Klammern: «a.length». Mit Klammern ist es bei Strings: «s.length()».`],
      [2, true, `«int[] a = new int[] {1, 2, 3};» und «int[] b = {1, 2, 3};» sind gleichwertig.`, `Beide erzeugen ein Feld der Länge 3 mit diesen Werten.`],
      [3, false, `«int[] a = new int[3] {1, 2, 3};» kompiliert.`, `Wird eine Werteliste angegeben, darf nicht gleichzeitig die Anzahl stehen – der Compiler zählt selbst.`],
      [3, false, `Der folgende Code kompiliert.`, `Die Kurzschreibweise mit {…} ist nur bei der Deklaration zulässig. Später: «a = new int[] {1, 2, 3};».`, `int[] a;
a = {1, 2, 3};`],
      [2, true, `Nach diesem Code hat ifeld[0] den Wert 99.`, `Die Zuweisung kopiert nur die Referenz. Beide Variablen verweisen auf dasselbe Feld.`, `int[] ifeld = { 1, 2, 3, 4 };
int[] afeld = ifeld;
afeld[0] = 99;`],
      [2, false, `Nach diesem Code hat b den Wert true.`, `== vergleicht bei Referenztypen die Referenzen, nicht die Inhalte. Es sind zwei verschiedene Felder → false.`, `int[] cfeld = { 1, 2, 3, 4 };
int[] dfeld = { 1, 2, 3, 4 };
boolean b = (cfeld == dfeld);`],
      [2, true, `Der Zugriff «a[a.length] = 1;» kompiliert, führt aber zur Laufzeit zu einer ArrayIndexOutOfBoundsException.`, `Das Feld existiert, der Index aber nicht. Das wird erst zur Laufzeit geprüft.`],
      [2, true, `Der folgende Code führt zur Laufzeit zu einer NullPointerException.`, `Die Referenz verweist auf nichts; es gibt kein Feld, auf das zugegriffen werden könnte.`, `int[] a = null;
a[0] = 1;`],
      [2, true, `Mit «for (int p : primes) { ... }» werden alle Elemente des Feldes primes der Reihe nach durchlaufen.`, `Das ist die Iterator-Schleife (for-each).`],
      [3, false, `Nach diesem Code enthält a die Werte {2, 4, 6}.`, `x ist nur eine Kopie des jeweiligen Elements. Das Feld bleibt {1, 2, 3}.`, `int[] a = { 1, 2, 3 };
for (int x : a) {
    x = x * 2;
}`],
      [2, false, `«int[][] m = new int[4][3];» erzeugt eine Matrix mit 3 Zeilen und 4 Spalten.`, `Der erste Index ist die Zeile, der zweite die Spalte: 4 Zeilen, 3 Spalten.`],
      [2, true, `Für das folgende Feld hat «matrixB[2][1]» den Wert 8.`, `Zeile 2 ist {7, 8, 9}; darin Index 1 → 8.`, `int[][] matrixB = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12} };`],
      [2, false, `Für das folgende Feld gilt «matrixB.length == 3».`, `matrixB.length ist die Anzahl der Zeilen: 4. Die Spaltenzahl liefert matrixB[0].length == 3.`, `int[][] matrixB = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12} };`],
      [3, true, `In Java müssen die Zeilen eines zweidimensionalen Feldes nicht gleich lang sein.`, `Beispiel: das Pascalsche Dreieck { {1}, {1,1}, {1,2,1}, {1,3,3,1} }.`],
      [3, true, `«int[][] t = new int[5][];» kompiliert; die Zeilen müssen danach noch einzeln erzeugt werden.`, `Zunächst sind alle t[i] null. Erst z. B. «t[i] = new int[i + 1];» legt die Zeilen an.`],
      [3, true, `Für das folgende Feld hat «pascal[3][2]» den Wert 3.`, `Zeile 3 ist {1, 3, 3, 1}; Index 2 → 3.`, `int[][] pascal = { {1},
                   {1, 1},
                   {1, 2, 1},
                   {1, 3, 3, 1} };`],
      [2, true, `«System.arraycopy(ifeld, 0, afeld, 0, ifeld.length);» kopiert die Elemente von ifeld in das (bereits erzeugte) Feld afeld; danach sind es zwei unabhängige Felder.`, `Parameter: Quelle, Startindex Quelle, Ziel, Startindex Ziel, Anzahl.`],
      [2, true, `Nach diesem Code enthält reihe die Werte {5, 4, 3, 2, 1}.`, `Es werden jeweils das i-te Element von vorn und von hinten getauscht – bis zur Mitte.`, `int[] reihe = { 1, 2, 3, 4, 5 };
int N = reihe.length;
int tmp;
for (int i = 0; i < N / 2; i++) {
    tmp = reihe[i];
    reihe[i] = reihe[N - 1 - i];
    reihe[N - 1 - i] = tmp;
}`],
      [3, false, `Läuft die Schleife bis «i < N» statt «i < N / 2», ist das Feld am Ende ebenfalls umgekehrt.`, `Dann wird jedes Paar zweimal getauscht – das Feld ist am Ende wieder in der ursprünglichen Reihenfolge.`, `int[] reihe = { 1, 2, 3, 4, 5 };
int N = reihe.length;
int tmp;
for (int i = 0; i < N; i++) {
    tmp = reihe[i];
    reihe[i] = reihe[N - 1 - i];
    reihe[N - 1 - i] = tmp;
}`],
      [1, true, `Die binäre Suche setzt voraus, dass das Feld sortiert ist.`, `Nur dann kann man nach dem Vergleich mit dem mittleren Element eine Hälfte ausschließen.`],
      [3, true, `Der folgende Code findet den gesuchten Wert bereits beim ersten Vergleich und gibt 5 aus.`, `mid = (0 + 11) / 2 = 5 und a[5] == 24.`, `int[] a = { 2, 7, 17, 19, 22, 24, 31, 34, 41, 45, 47, 59 };
int wanted = 24;
int left = 0, right = a.length - 1;
int pos = -1;
while (left <= right) {
    int mid = (left + right) / 2;
    if (wanted == a[mid]) {
        pos = mid;
        break;
    } else if (wanted > a[mid]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
System.out.println(pos);`],
      [2, false, `Der folgende Code gibt 0 aus.`, `27 kommt nicht vor; pos läuft bis -1 herunter, erst dann ist pos >= 0 falsch. Ausgabe: -1.`, `int[] a = { 34, 45, 7, 17, 31, 22, 59, 41, 24, 2, 19, 47 };
int wanted = 27;
int pos = a.length - 1;
while ((pos >= 0) && (a[pos] != wanted)) {
    pos--;
}
System.out.println(pos);`],
      [2, false, `Nach «boolean[] sieve = new boolean[max + 1];» haben alle Elemente den Wert true.`, `Default-Initialisierung für boolean ist false. Deshalb setzt das Sieb des Eratosthenes erst alle Elemente ab Index 2 auf true.`],
      [1, true, `Felder, Klassen und Interfaces sind die Referenzdatentypen in Java.`, `Alles andere sind die acht primitiven Typen.`],
      [2, true, `Eine Variable eines Referenzdatentyps enthält nicht das Objekt selbst, sondern eine Referenz auf das Objekt.`, `Indirekter Zugriff: Über den Verweis findet man den eigentlichen Wert.`],
      [1, true, `«null» bezeichnet eine Referenz, die auf nichts verweist.`, `Die leere Referenz; prüfbar mit «if (r != null)».`],
      [2, false, `«int x = null;» kompiliert.`, `null gibt es nur für Referenztypen, nicht für primitive Typen.`],
      [2, true, `Einer Feld-Variablen vom Typ «double[]» kann später ein anderes double-Feld zugewiesen werden, auch eines mit anderer Länge.`, `Es ändert sich nur die Referenz; die Länge gehört nicht zum Typ.`],
      [3, false, `Nach diesem Code hat a[0] den Wert 7.`, `Die dritte Zeile lässt b auf ein neues Feld zeigen; a verweist weiter auf {1, 2, 3}.`, `int[] a = { 1, 2, 3 };
int[] b = a;
b = new int[] { 7, 8, 9 };`],
      [2, true, `Den Inhalt zweier Strings vergleicht man mit «equals», nicht mit «==».`, `== vergleicht bei Referenztypen, ob beide auf dasselbe Objekt zeigen.`],
      [3, true, `Strings sind unveränderlich: «s.toUpperCase()» liefert einen neuen String und lässt s unverändert.`, `Deshalb gibt es bei String auch kein setCharAt (siehe Probetestat).`],
      [1, true, `Der Parameter «String[] args» der main-Methode ist ein Feld von Zeichenketten.`, `Er enthält die Kommandozeilenparameter.`],
      [3, false, `Der folgende Code läuft ohne Fehler durch und max ist danach 9.`, `Die Schleife läuft bis i == a.length (i <= statt <): a[3] existiert nicht → ArrayIndexOutOfBoundsException. Außerdem wird a[0] übersprungen.`, `int[] a = { 3, 9, 2 };
int max = 0;
for (int i = 1; i <= a.length; i++) {
    if (a[i] > max) max = a[i];
}`],
      [3, false, `Nach diesem Code hat avg den Wert 1.5.`, `(1 + 2) / 2 wird ganzzahlig gerechnet: 1, dann zu 1.0 umgewandelt.`, `int[] a = { 1, 2 };
double avg = (a[0] + a[1]) / a.length;`],
      [2, false, `Das Produkt einer (4×3)-Matrix mit einer (3×4)-Matrix ist eine (3×3)-Matrix.`, `(l×m) · (m×n) ergibt (l×n), hier also eine (4×4)-Matrix.`],
      [3, false, `Nach «char[][] maze = new char[4][4];» enthalten alle Einträge ein Leerzeichen.`, `Default für char ist das Zeichen mit dem Code 0 ('\\0'), kein Leerzeichen. Im Maze-Beispiel wird deshalb erst mit ' ' gefüllt.`],
      [3, true, `Ein Feld der Länge 0, z. B. «new int[0]», ist in Java erlaubt.`, `Die Länge muss nur eine nichtnegative int sein.`],
      [1, true, `Javadoc-Kommentare beginnen mit «/**».`, `Aus ihnen kann automatisch eine HTML-Dokumentation erzeugt werden.`],
      [1, false, `Das Javadoc-Tag «@param» beschreibt den Rückgabewert einer Methode.`, `@param beschreibt einen Parameter, @return den Rückgabewert.`],
      [1, true, `Mit dem Javadoc-Tag «@deprecated» kennzeichnet man veraltete Klassen oder Methoden, die nicht mehr benutzt werden sollten.`, `Weitere Tags: @author, @version, @throws, @since.`],
      [2, true, `Der Komponententyp eines Feldes kann selbst ein Referenzdatentyp sein, z. B. «String[]» oder «int[][]».`, `Ein Feld von Feldern ist ein mehrdimensionales Feld.`],
    ],
  },
];

if (typeof module !== "undefined") module.exports = { TOPICS };
