const WalletConnectProvider = require("wallet-connect-provider");

const { getRpcUrl } = require("./helpers");

function getProvider(chainId) {
  const provider = new WalletConnectProvider({
    rpcUrl: getRpcUrl(chainId)
  });
  return provider;
}

module.exports = { getProvider };
