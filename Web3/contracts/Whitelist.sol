//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Whitelist {

    uint8 public maxWhitelistedAddresses;

    // Create a mapping of whitelistedAddresses
    // if an address is whitelisted, we would set it to true, it is false by default for all other addresses.
    // A mapping is simply a list of key-value pairs, where the key is the address and the value is a boolean 
    mapping(address => bool) public whitelistedAddresses;

    uint8 public numberOfAddressesWhitelisted;

    constructor(uint8 _maxNumberOfWhitelistedAddresses) {
        maxWhitelistedAddresses =  _maxNumberOfWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {

        require(!whitelistedAddresses[msg.sender], "Sender has already been whitelisted.");
        require(numberOfAddressesWhitelisted < maxWhitelistedAddresses, "More addresses cant be added, limit reached.");

        whitelistedAddresses[msg.sender] = true;
        numberOfAddressesWhitelisted += 1;
    }

}