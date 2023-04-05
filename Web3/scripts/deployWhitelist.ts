// Contract Deployed to OP_GOERLI: 0xa48D89457a94224214Da77931a1AC2FFa5bb2e30

const hre = require("hardhat");

async function mainDeploy() {
    // Deploy the contract
    const Whitelist = await hre.ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy();
    await whitelist.deployed();
    console.log("Whitelist deployed to:", whitelist.address);
}

mainDeploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });    