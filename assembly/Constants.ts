import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "The Adoration of the Cryptos";
  export const SYMBOL: string = "Triumph";
  export const MINT_PRICE: u64 = 68515000000;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 3;
  export const URI: string = "https://nftstorage.link/ipfs/bafybeibdocdd4ura4denytmtnuzf2nu4s2zufhfryxtkvrr4nzlroqsply";
  export const OWNER: Uint8Array = Base58.decode("1FRhAeSs1Cci3BPGrMjnHjhKjBVhMSx82v");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1FRhAeSs1Cci3BPGrMjnHjhKjBVhMSx82v");
}
