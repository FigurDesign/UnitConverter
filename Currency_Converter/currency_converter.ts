// currency_converter.ts enthält die Hauptlogik für die Währungsumrechnung
import { Application, Router } from "./deps.ts";
import { parse } from "./deps.ts";
import { config } from "./deps.ts";

// Laden Sie Ihre API-Key aus der .env-Datei
const env = config();
const apiKey = env.API_KEY;

// Funktion zur Konvertierung von Währungen
async function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
): Promise<number> {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const fromRate = data.rates[fromCurrency];
  const toRate = data.rates[toCurrency];

  if (!fromRate || !toRate) {
    throw new Error("Ungültige Währungssymbole");
  }

  const exchangeRate = toRate / fromRate;
  return amount * exchangeRate;
}

// Verarbeiten der Kommandozeilenargumente
const args = parse(Deno.args);

if (args.amount && args.from && args.to) {
  const amount = parseFloat(args.amount);
  const fromCurrency = args.from.toUpperCase();
  const toCurrency = args.to.toUpperCase();

  try {
    const convertedAmount = await convertCurrency(
      amount,
      fromCurrency,
      toCurrency,
    );

    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
  } catch (error) {
    console.error("Fehler bei der Währungskonvertierung:", error);
  }
} else {
  console.log("Bitte geben Sie die benötigten Argumente an: --amount, --from und --to");
}
