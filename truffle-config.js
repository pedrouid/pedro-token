const hdWallet = require("./utils/hd-wallet");
const bakaoh = require("./utils/bakaoh");
const aquiladev = require("./utils/aquiladev");

const chainId = 4;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*" // Any network (default: none)
    },
    rinkeby: {
      provider: hdWallet.getProvider(chainId),
      network_id: chainId // Rinkeby's id
      // gas: 5500000, // Rinkeby has a lower block limit than mainnet
      // gasPrice: 4000000000, // Setting gasPrice to 4 Gwei
      // confirmations: 2, // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    },
    bakaoh: {
      provider: bakaoh.getProvider(chainId),
      network_id: chainId // Rinkeby's id
    },
    aquiladev: {
      provider: aquiladev.getProvider(chainId),
      network_id: chainId // Rinkeby's id
    }
  }
};
