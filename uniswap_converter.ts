/** Import aller benötigten Module und Bibliotheken  */
import { ethers, Contract, ContractInterface, providers } from "./deps.ts";

const INFURA_API_KEY = "b626eda9ab984d16afe652736ea09c14";
const ETH_PROVIDER_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;


/** Die UNISWAP_V2_ROUTER_ABI-Variable enthält das Application Binary Interface (ABI) für den Uniswap-Router. Das ABI ist erforderlich, um mit dem Smart Contract zu interagieren */
const UNISWAP_V2_ROUTER_ABI: ContractInterface = [
  "function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts)",
];

const UNISWAP_V2_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

async function main() {
  /** Erstellen einer Instanz des Ethereum-Providers nut Infura */
  const provider = new providers.JsonRpcProvider(ETH_PROVIDER_URL);

  const uniswapRouter = new Contract(
    UNISWAP_V2_ROUTER_ADDRESS,
    UNISWAP_V2_ROUTER_ABI,
    provider,
  );

  const input = prompt(
    "Bitte geben Sie die Token-Adressen ein, die Sie konvertieren möchten, getrennt durch ein Komma (z.B. 0x6B175474E89094C44Da98b954EedeAC495271d0F,0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2): ",
  );

  if (!input) {
    console.log("Ungültige Eingabe. Bitte versuchen Sie es erneut.");
    return;
  }

  const tokens = input.split(",").map((token) => token.trim());

  if (tokens.length !== 2) {
    console.log(
      "Bitte geben Sie genau zwei Token-Adressen ein, getrennt durch ein Komma.",
    );
    return;
  }

  const TOKEN_1 = tokens[0];
  const TOKEN_2 = tokens[1];

  const amountsOut = await uniswapRouter.getAmountsOut(
    ethers.BigNumber.from("1000000000000000000"),
    [TOKEN_1, TOKEN_2],
  );
  const token1ToToken2 = parseFloat(
    ethers.utils.formatUnits(amountsOut[1], 18),
  );

  const amountsOutReverse = await uniswapRouter.getAmountsOut(
    ethers.BigNumber.from("1000000000000000000"),
    [TOKEN_2, TOKEN_1],
  );
  const token2ToToken1 = parseFloat(
    ethers.utils.formatUnits(amountsOutReverse[1], 18),
  );

  console.log(`1 ${TOKEN_1} entspricht ${token1ToToken2} ${TOKEN_2}`);
  console.log(`1 ${TOKEN_2} entspricht ${token2ToToken1} ${TOKEN_1}`);
}

main();