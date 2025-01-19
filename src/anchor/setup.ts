import { Program } from "@coral-xyz/anchor";
import { IDL, KsgToken } from "./idl";
import { Connection } from "@solana/web3.js";
export const KSG_MINT_ADDRESS = "KSGJveePiNeVFLD75E5iRM5beJjkS5yCNsufs8yoWtL"
export const endpoint = "https://api.devnet.solana.com"
export const connection = new Connection(endpoint, "confirmed");
export const program = new Program<KsgToken>(IDL, {
  connection
});
