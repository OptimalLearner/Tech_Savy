const { ethers } = require("ethers")
const provider = new ethers.providers.Web3Provider(window.ethereum)

async function getCurrentBlock() {
  let currentBlock = await provider.getBlockNumber();
  console.log(currentBlock);
}

getCurrentBlock();