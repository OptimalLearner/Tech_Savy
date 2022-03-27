require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // polygon testnet
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["ecafd779330d8ce0cf910f1bf47710900c4090297ff0cca14a07a7654cd91851"] // your wallet private key
    },
    //polygon mainnet
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: ["ecafd779330d8ce0cf910f1bf47710900c4090297ff0cca14a07a7654cd91851"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};