const HDWalletProvider = require("truffle-hdwallet-provider");

const { getRpcUrl } = require("./helpers");
const { getMnemonic } = require("./mnemonic");

function getProvider(chainId) {
  const rpcUrl = getRpcUrl(chainId);
  const mnemonic = getMnemonic();
  const provider = new HDWalletProvider(mnemonic, rpcUrl);
  return provider;
}

module.exports = {
  getProvider
};
