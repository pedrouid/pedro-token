const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

function getNetwork(chainId) {
  switch (chainId) {
    case 1:
      return "mainnet";
    case 3:
      return "ropsten";
    case 4:
      return "rinkeby";
    case 5:
      return "goerli";
    case 42:
      return "kovan";
    default:
      throw new Error(`No network matching chainId: ${chainId}`);
  }
}

function getRpcUrl(chainId) {
  const network = getNetwork(chainId);
  const INFURA_PROJECT_ID = `e6e5816422864621b96685a7beb721b9`;
  const rpcUrl = `https://${network}.infura.io/v3/${INFURA_PROJECT_ID}`;
  return rpcUrl;
}

function getMnemonic() {
  const mnemonic = fs
    .readFileSync(".secret")
    .toString()
    .trim();
  return mnemonic;
}

function getProvider(chainId) {
  const rpcUrl = getRpcUrl(chainId);
  const mnemonic = getMnemonic();
  const provider = new HDWalletProvider(mnemonic, rpcUrl);
  return provider;
}

module.exports = {
  getProvider
};
