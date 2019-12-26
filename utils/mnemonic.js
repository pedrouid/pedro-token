const fs = require("fs");

function getMnemonic() {
  const mnemonic = fs
    .readFileSync(".secret")
    .toString()
    .trim();
  return mnemonic;
}

module.exports = {
  getMnemonic
};
