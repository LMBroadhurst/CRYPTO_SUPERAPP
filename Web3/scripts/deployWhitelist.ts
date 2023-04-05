// Whitelist deployed to OP_GOERLI: 0x12FD4584B4DCc049dEa4fA809479d74037Fb10bb

const hre = require("hardhat");

async function mainDeploy() {
    // Deploy the contract
    const Whitelist = await hre.ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy(5);
    await whitelist.deployed();
    console.log("Whitelist deployed to OP_GOERLI:", whitelist.address);
}

mainDeploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });    