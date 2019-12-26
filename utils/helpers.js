const { INFURA_PROJECT_ID } = require("./constants");

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

  const rpcUrl = `https://${network}.infura.io/v3/${INFURA_PROJECT_ID}`;
  return rpcUrl;
}

module.exports = {
  getNetwork,
  getRpcUrl
};
