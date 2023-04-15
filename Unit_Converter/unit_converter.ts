// offline_converter.ts

import { parse } from "https://deno.land/std/flags/mod.ts";

const lengthUnits = {
  mi: 1609.34,    // Meilen
  m: 1,           // Meter
  yd: 0.9144,     // Yards
  ft: 0.3048,     // Fuß
  in: 0.0254,     // Zoll
  nmi: 1852,      // Nautische Meilen
};

const areaUnits = {
  sqmi: 2.58999e6,    // Quadratmeilen
  acre: 4046.86,      // Acres
  sqyd: 0.836127,     // Quadratyards
  sqft: 0.092903,     // Quadratfuß
  sqin: 0.00064516,   // Quadratzoll
  sqm: 1,             // Quadratmeter
};

const volumeUnits = {
  gal: 3.78541,    // Gallonen (US)
  l: 1,            // Liter
  ft3: 0.0283168,  // Kubikfuß
  in3: 0.0000163871, // Kubikzoll
  bbl: 0.158987,   // Barrel (US)
};

const weightUnits = {
    lb: 0.453592,   // Pfund (US)
    oz: 0.0283495,  // Unze (US)
    ct: 0.0002,     // Karat
    t: 1000,        // Tonne
    gr: 0.0000647989, // Grain
    kg: 1,          // Kilogramm
};

const speedUnits = {
  kt: 0.514444,    // Knoten
  mach: 340.3,     // Mach (geschätzte Schallgeschwindigkeit in m/s)
  fps: 0.3048,     // Fuß pro Sekunde
  mph: 0.44704,    // Meilen pro Stunde
  kph: 0.277778,   // Kilometer pro Stunde
};

const timeUnits = {
    y: 31536000, // Jahr (kalender)
    m: 2628000,  // Monat (kalender)
    w: 604800,   // Woche
    d: 86400,    // Tag
    h: 3600,     // Stunde
    min: 60,     // Minute
    s: 1,        // Sekunde
};

export function convert(
    amount: number,
    fromUnit: string,
    toUnit: string,
    conversionType: string,
): number {
    const unitData = getUnitData(conversionType);
    const fromFactor = unitData[fromUnit];
    const toFactor = unitData[toUnit];

    if (!fromFactor || !toFactor) {
        throw new Error(`Ungültige ${conversionType}-Einheiten`);
    }

    const baseAmount = amount * fromFactor;
    return baseAmount / toFactor;
}

function getUnitData(conversionType: string) {
    switch (conversionType) {
        case "length":
        return lengthUnits;
        case "area":
        return areaUnits;
        case "volume":
        return volumeUnits;
        case "weight":
        return weightUnits;
        case "speed":
        return speedUnits;
        case "time":
            return timeUnits;
        default:
            throw new Error(`Ungültiger Einheitentyp: ${conversionType}`);
        }
}

const args = parse(Deno.args);

if (args.type && args.amount && args.from && args.to) {
    const amount = parseFloat(args.amount);
    const fromUnit = args.from.toLowerCase();
    const toUnit = args.to.toLowerCase();
    const conversionType = args.type.toLowerCase();

    try {
    const convertedAmount = convert(amount, fromUnit, toUnit, conversionType);
    let precision = 2;
    if (convertedAmount < 0.01) {
        precision = Math.abs(Math.floor(Math.log10(convertedAmount))) + 1;
    }
    console.log(
        `${amount} ${fromUnit.toUpperCase()} = ${convertedAmount.toFixed(precision)} ${toUnit.toUpperCase()}`,
    );
    } catch (error) {
    console.error("Fehler bei der Konvertierung:", error);
    }
} else {
    console.log(
    "Bitte geben Sie die benötigten Argumente an: --type, --amount, --from und --to",
    );
}
