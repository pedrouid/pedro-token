const WalletConnectProvider = require("truffle-walletconnect-provider");

const { getRpcUrl } = require("./helpers");

function getProvider(chainId) {
  const provider = new WalletConnectProvider({
    rpcUrl: getRpcUrl(chainId)
  });
  return provider;
}

module.exports = { getProvider };
