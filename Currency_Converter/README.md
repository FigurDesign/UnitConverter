# Währungsumrechner

Der Währungsumrechner ist ein einfaches Tool, das entwickelt wurde, um Währungen basierend auf aktuellen Wechselkursen zu konvertieren. Es verwendet die Open Exchange Rates API, um Wechselkurse abzurufen.

## Voraussetzungen

- Deno muss auf Ihrem System installiert sein.
- Sie benötigen einen API-Schlüssel von [Open Exchange Rates](https://openexchangerates.org/signup/free).

## Installation

1. Stellen Sie sicher, dass Deno auf Ihrem System installiert ist. Sie können Deno [hier](https://deno.land/) herunterladen.
2. Klonen Sie das Repository oder laden Sie die Dateien herunter.
3. Erstellen Sie eine `.env`-Datei und fügen Sie Ihren API-Schlüssel hinzu:
        API_KEY=<ihr Api Schlüssel>
        --> In der abgegebenen Version ist mein Api schlüssel hinterlegt. Es ist kein Problem diesen zu nutzen, er sollte allerdings nicht veröffentlicht werden


## Projektstruktur und Aufbau

Das Projekt verwendet eine `deps.ts`-Datei, um alle externen Abhängigkeiten zu zentralisieren und zu verwalten. Dies erleichtert das Aktualisieren und Nachverfolgen von Abhängigkeiten im gesamten Projekt.

Die Hauptdatei `currency_converter.ts` importiert alle benötigten Abhängigkeiten aus der `deps.ts`-Datei und führt die Konvertierungsfunktionen aus.

### deps.ts

Die `deps.ts`-Datei enthält alle externen Abhängigkeiten, die im Projekt verwendet werden. In unserem Fall sind dies die Module aus der Deno-Standardbibliothek und die `node-fetch`-Bibliothek für HTTP-Anfragen.

Um eine Abhängigkeit im gesamten Projekt zu aktualisieren, müssen Sie lediglich die URL und die Versionsnummer in der `deps.ts`-Datei ändern.



## Benutzung

Führen Sie das Programm mit den erforderlichen Parametern aus:
deno run --allow-net --allow-read currency_converter.ts --amount <Menge> --from <Ausgangswährung> --to <Zielwährung>

deno run ... currency_converter.ts  --> Führt das Programm aus
--allow-net                         --> Lässt Internetzugriff zu (für API Zugriff benötigt)
--allow-read                        --> Gibt dem Programm Leserechte (Für den API-Key inder .env)
--amount                            --> Umzuwandelnder Betrag
--from --to                         --> Ausgangswährung und Zielwährung

Beispiel: 
deno run --allow-net --allow-read currency_converter.ts --amount 100 --from usd --to eur
In diesem Beispiel konvertieren wir 100 US-Dollar (USD) in Euro (EUR).


## Währungsbeispiele

Hier sind einige Beispiele für Währungscodes, die verwendet werden können:

- USD: US-Dollar
- EUR: Euro
- GBP: Britisches Pfund
- JPY: Japanischer Yen
- CHF: Schweizer Franken
- CAD: Kanadischer Dollar
- AUD: Australischer Dollar
- CNY: Chinesischer Yuan

Eine vollständige Liste der unterstützten Währungen finden Sie auf der [Open Exchange Rates-Website](https://docs.openexchangerates.org/docs/supported-currencies).

## Hinweis

Die kostenlose Version der Open Exchange Rates API hat einige Einschränkungen, wie z.B. eine begrenzte Anzahl von Anfragen pro Monat und möglicherweise weniger aktuelle Wechselkurse. Für eine höhere Genauigkeit und zusätzliche Funktionen können Sie auf einen kostenpflichtigen Plan upgraden.

Desweiteren ist das Programm an die API von Open Exchange Rates gebunden. Falls diese ausfällt funktioniert das ganze Programm nicht mehr. Aus diesem Grund wurde versucht eine zweite API (API Layer) einzubinden. Leider hat dies nicht funktioniert, so dass hier bewusst ein Risiko eingegangen wurde






