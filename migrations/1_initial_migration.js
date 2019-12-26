const PedroToken = artifacts.require("PedroToken");
const {
  convertStringToHex,
  convertAmountToRawNumber
} = require("../utils/bignumber");

const ONE_BILLION = "0x" + convertStringToHex(convertAmountToRawNumber(1e9));

module.exports = function(deployer, network, accounts) {
  deployer.deploy(PedroToken, accounts[0], ONE_BILLION);
};
