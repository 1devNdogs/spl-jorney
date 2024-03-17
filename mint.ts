import { getKeypairFromFile } from "@solana-developers/helpers";
import { TokenMetadata } from "@solana/spl-token-metadata";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const payer = await getKeypairFromFile("~/.config/solana/id.json");
console.log("payer", payer.publicKey.toBase58());

const mint = Keypair.generate();
console.log("mint", mint.publicKey.toBase58());

const metadata: TokenMetadata = {
  mint: mint.publicKey,
  name: "My SPL Journey",
  symbol: "JOURNEY",
  uri: "https://raw.githubusercontent.com/solana-developers/opos-asset/main/assets/DeveloperPortal/metadata.json",
  additionalMetadata: [["description", "My SPL Journey"]],
};
