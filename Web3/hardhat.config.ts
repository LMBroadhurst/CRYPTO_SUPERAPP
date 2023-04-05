import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const OP_GOERLI_URL = process.env.OP_GOERLI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

if (PRIVATE_KEY === undefined) {
  throw new Error("Please set your PRIVATE_KEY in the .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    op_goerli: {
      url: OP_GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};

export default config;
