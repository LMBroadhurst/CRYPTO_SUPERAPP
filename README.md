## Design Principles

Within a page, all 'sections' must be seperated only by the gap setting on the parent container.
This will avoid mismatched padding/margins between each section e.g. p-10 & p-12.
Extra customisation can take place within the container.

The customisation within the container must be less than what the gap setting is on the parent.
This is to ensure each section is clearly associated with the correct elements, avoiding confusion
with the UI.

Of course for each device, phone/tablet/pc these values will scale up.

VH... Started implementing VH in this project, just realised how people build websites with seemingly perfect dimensions per page.
- This is actually not as fool proof as I thought, when I restart my project the vh trick fails...

## Start the App

## npm i cheatsheet for HardHat
```
npm i "@nomicfoundation/hardhat-chai-matchers" "@nomicfoundation/hardhat-network-helpers" "@nomicfoundation/hardhat-toolbox" "@nomiclabs/hardhat-ethers" "@nomiclabs/hardhat-etherscan" "@openzeppelin/contracts" "@openzeppelin/contracts-upgradeable" "@openzeppelin/hardhat-upgrades" "@openzeppelin/truffle-upgrades" "@typechain/ethers-v5" "@typechain/hardhat" "@types/mocha" "chai" "dotenv" "ethers" "hardhat" "hardhat-gas-reporter" "solidity-coverage" "ts-node" "typechain" "typescript"

// Change ethers version to 5.7.2
```