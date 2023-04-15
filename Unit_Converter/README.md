# Unit Converter

Der Unit-Konverter ist ein Tool, das entwickelt wurde, um verschiedene Einheiten wie Länge, Fläche, Volumen, Gewicht, Geschwindigkeit und Zeit ohne Internetverbindung zu konvertieren.

## Installation

1. Stellen Sie sicher, dass Deno auf Ihrem System installiert ist. Sie können Deno [hier](https://deno.land/) herunterladen.
2. Klonen Sie das Repository oder laden Sie die Dateien herunter.

## Benutzung

Führen Sie das Programm mit den erforderlichen Parametern aus:
deno run unit_converter.ts --type <Konvertierungstyp> --amount <Menge> --from <Ausgangseinhei> --to <Zieleinheit>

deno run unit_converter.ts  --> Führt das Programm aus
--type                      --> bestimmt den Konvertierungstyp
--amount                    --> Umzuwandelnder Betrag
--from --to                 --> Ausgangseinheit und Zieleinheit


Beispiel:
deno run unit_converter.ts --type length --amount 10 --from mi --to km
In diesem Beispiel konvertieren wir 10 Meilen (mi) in Kilometer (km).

## Konvertierungstypen und Einheiten

Der Offline-Konverter unterstützt verschiedene Konvertierungstypen und Einheiten:

### Länge (--type length)
- mi: Meile
- yd: Yard
- ft: Fuß
- in: Zoll
- nmi: Nautische Meile
- m: Meter

### Fläche (--type area)
- sqmi: Quadratmeile
- acre: Acre
- sqyd: Quadratyard
- sqin: Quadratzoll
- sqft: Quadratfuß
- sqm: Quadratmeter

### Volumen (--type volume)
- gal: Gallone (US)
- l: Liter
- ft3: Kubikfuß
- in3: Kubikzoll
- bbl: Barrel (US)

### Gewicht (--type weight)
- lb: Pfund (US)
- oz: Unze (US)
- ct: Karat
- t: Tonne
- gr: Grain
- kg: Kilogramm

### Geschwindigkeit (--type speed)
- kt: Knoten
- mach: Mach
- fps: Fuß pro Sekunde
- mph: Meilen pro Stunde
- kph: Kilometer pro Stunde

### Zeit (--type time)
- calyr: Jahr (kalender)
- calmo: Monat (kalender)
- wk: Woche
- hr: Stunde
- min: Minute
- s: Sekunde


