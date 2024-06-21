# Summen berechnen mit AJAX
Einfaches JS-Skript, welches ein JSON-Array mit mehreren Zahlen im Request Body entgegennimmt 
 
Das Skript addiert diese Zahlen und gibt die Summe zurückgeben 
 
## Dateien
`index.html`: Die Hauptseite, welche das JavaScript einbindet und ausführt.
`server.js`: Das JavaScript, das die Zahlen überprüft und addiert() (JS Server).

## Nutzung

Installieren Sie die benötigten Pakete mit `npm install express body-parser cors`.
Starten Sie den Server mit `node server.js`.

Öffnen Sie einen Webbrowser und navigieren Sie zu http://localhost:3000.
Sie sollten die index.html-Seite sehen und die Funktionalität zur Berechnung der Summe testen können.
