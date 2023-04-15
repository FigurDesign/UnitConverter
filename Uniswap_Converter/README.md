# Projekt-Dokumentation: Uniswap-Konverter

## Ziel

Wir möchten ein einfaches Tool erstellen, das die Konvertierung von Kryptowährung über das Uniswap-Protokoll ermöglicht. Um aktuelle Wechselkurse für die gegebenen Kryptowährungen auszugeben, benutzen wir die **Uniswap Smart Contracts**. 

## Gedanken

Uniswap ist ein dezentralisierter Kryptowährungsumtausch, der auf Ethereum basiert. Da es sich bei Uniswap um ein dezentrales Protokoll handelt, können wir direkt mit den Smart Contracts interagieren.  


Deno und TypeScript sind moderne und vorallem __sichere__ Werkzeuge für die Entwicklung skalierbaren Anwendungen.

## Vorgehen

1. **Infura API**: Um mit dem Ethereum-Netzwerk zu interagieren, wird Infura als Ethereum-Provider verwendet. Für den Zugriff auf das Ethereum-Netzwerk muss ein API-Schlüssel über [Infura](https://www.infura.io/) erstellt werden. 

2. **Ether.js**: [Ethers.js](https://docs.ethers.org/v5/) ist eine JavaScript-Bibliothek, welche die Funktionen zum Interagieren mit dem Ethereum-Netzwerk und Smart Contracts bereitstellt. Sie wird verwendet, um eine Verbindung zum Uniswap Smart Contract herzustellen und die aktuellen Wechselkurse für ausgewählte Kryptowährungen abzurufen.

3. **Deno und TypeScript**: [Deno](https://deno.land/) ist eine sichere Laufzeitumgebung für JavaScript und TypeScript, die die Entwicklung von Anwendungen mit modernen Technologien und Sicherheitsfunktionen ermöglicht. TypeScript ist eine erweiterte Version von JavaScript, die statische Typisierung und verbesserte Tools für die Entwicklung skalierbarer und fehlerfreier Anwendungen bietet.

4. **Anwendungstest**: Durch Testen der Anwendung wird sichergestellt, dass sie korrekt funktioniert und die erwarteten Ergebnisse liefert. Bei Bedarf werden Fehler behoben und Optimierungen vorgenommen, um die Anwendung effizienter und benutzerfreundlicher zu gestalten.

## Anwendung

Um das Programm zu starten nutzen sie den Befehl:
deno run --allow-net uniswap_converter.ts

deno run uniswap_converter.ts --> Führt das Programm aus
--allow-net                   --> Lässt Internetzugriff zu (für API Zugriff benötigt)

Danach fragt das Programm nach 2 Tokens, welche verglichen werden sollen:
Bitte geben Sie die Token-Adressen ein, die Sie konvertieren möchten, getrennt durch ein Komma (z.B. 0x6B175474E89094C44Da98b954EedeAC495271d0F,0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)

Das angegebene Beispiel vergleicht DAI mit WATH. Das Programm benötigt die Token-Adressen der Kryptowährungen, um den Wechselkurs abzurufen. Sie können die Token-Adressen von Websites wie https://etherscan.io/ oder von den offiziellen Projektseiten der jeweiligen Kryptowährungen erhalten.

## Zusammenfassung

Uniswap Converter ist ein einfaches Tool, das die aktuellen Wechselkurse ausgewählter Kryptowährungen auf dem Uniswap-Protokoll abruft und ausgibt. Es zielt darauf ab, Benutzern eine einfach zu bedienende Möglichkeit zu bieten, die aktuellen Wechselkurse ihrer bevorzugten Kryptowährungen zu überprüfen und diese möglicherweise umzutauschen.

Deno, TypeScript, Ethers.js und Infura bieten in Summe für uns eine gute und sichere Lösung, um auf Uniswap zuzugreifen und Wechselkursinformationen abzurufen.



## Weitere Gedanken & Ausblick

**Mit einem größeren Zeitfenster hätten wir das Projekt gerne noch um **eine/mehrere** der folgenden Funktionen erweitert:**

### Integration von Swaps 

Das Tool hätte erweitert werden können, um tatächliche Swaps zwischen Kryptowährungen durchzuführen. Hierfür müssten die entsprechenden Funktionen des Uniswap Smart Contracts aufgerufen werden. 

### Front-End Interface

Gerne hätten wir das Tool mit einer Web-Oberfläche erweitert, um es benutzerfreundlicher zu gestalten und eine visuelle Darstellung der Wechelkursimformationen zu bieten.