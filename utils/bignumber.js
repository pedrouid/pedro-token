const BigNumber = require("bignumber.js");

function random() {
  return BigNumber.random().toString();
}

function toFixed(value, decimals) {
  return new BigNumber(`${value}`).toFixed(decimals).toString();
}

function isNaN(value) {
  return new BigNumber(`${value}`).isNaN();
}

function isNumber(value) {
  const isNaNResult = isNaN(value);
  return !isNaNResult;
}

function isInteger(value) {
  return new BigNumber(`${value}`).isInteger();
}

function isPositive(value) {
  return new BigNumber(`${value}`).isPositive();
}

function isNegative(value) {
  return new BigNumber(`${value}`).isNegative();
}

function isZero(value) {
  return new BigNumber(`${value}`).isZero();
}

function countDecimalPlaces(value) {
  return new BigNumber(`${value}`).dp();
}

function convertNumberToString(value) {
  return new BigNumber(`${value}`).toString();
}

function convertStringToNumber(value) {
  return new BigNumber(`${value}`).toNumber();
}

function convertHexToString(hex) {
  return new BigNumber(`${hex}`).toString();
}

function convertStringToHex(value) {
  return new BigNumber(`${value}`).toString(16);
}

function convertHexToNumber(hex) {
  return convertStringToNumber(convertHexToString(hex));
}

function convertNumberToHex(value) {
  return convertStringToHex(convertNumberToString(value));
}

function greaterThan(numberOne, numberTwo) {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) ===
    1
  );
}

function greaterThanOrEqual(numberOne, numberTwo) {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) >= 0
  );
}

function smallerThan(numberOne, numberTwo) {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) ===
    -1
  );
}

function smallerThanOrEqual(numberOne, numberTwo) {
  return (
    new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) <= 0
  );
}

function multiply(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .times(new BigNumber(`${numberTwo}`))
    .toString();
}

function divide(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .dividedBy(new BigNumber(`${numberTwo}`))
    .toString();
}

function floorDivide(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .dividedToIntegerBy(new BigNumber(`${numberTwo}`))
    .toString();
}

function mod(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .mod(new BigNumber(`${numberTwo}`))
    .toString();
}

function add(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .plus(new BigNumber(`${numberTwo}`))
    .toString();
}

function subtract(numberOne, numberTwo) {
  return new BigNumber(`${numberOne}`)
    .minus(new BigNumber(`${numberTwo}`))
    .toString();
}

function convertAmountToRawNumber(value, decimals = 18) {
  return new BigNumber(`${value}`)
    .times(new BigNumber("10").pow(decimals))
    .toString();
}

function convertAmountFromRawNumber(value, decimals = 18) {
  return new BigNumber(`${value}`)
    .dividedBy(new BigNumber("10").pow(decimals))
    .toString();
}

function handleSignificantDecimals(value, decimals, buffer) {
  const result = formatSignificantDecimals(value, decimals, buffer);
  return new BigNumber(`${result}`).dp() <= 2
    ? new BigNumber(`${result}`).toFormat(2)
    : new BigNumber(`${result}`).toFormat();
}

function formatSignificantDecimals(value, decimals, buffer) {
  if (
    !new BigNumber(`${decimals}`).isInteger() ||
    (buffer && !new BigNumber(`${buffer}`).isInteger())
  ) {
    return null;
  }
  buffer = buffer ? convertStringToNumber(buffer) : 3;
  decimals = convertStringToNumber(decimals);
  const absolute = new BigNumber(`${value}`).abs().toNumber();
  if (smallerThan(absolute, 1)) {
    decimals = value.slice(2).search(/[^0]/g) + buffer;
    decimals = decimals < 8 ? decimals : 8;
  } else {
    decimals = decimals < buffer ? decimals : buffer;
  }
  let result = new BigNumber(`${value}`).toFixed(decimals);
  result = new BigNumber(`${result}`).toString();
  return result;
}

function formatFixedDecimals(value, decimals) {
  const _value = convertNumberToString(value);
  const _decimals = convertStringToNumber(decimals);
  const result = new BigNumber(
    new BigNumber(_value).toFixed(_decimals)
  ).toString();
  return result;
}

function formatInputDecimals(inputOne, inputTwo) {
  const _nativeAmountDecimalPlaces = countDecimalPlaces(inputTwo);
  const decimals =
    _nativeAmountDecimalPlaces > 8 ? _nativeAmountDecimalPlaces : 8;
  const result = new BigNumber(formatFixedDecimals(inputOne, decimals))
    .toFormat()
    .replace(/,/g, "");
  return result;
}

module.exports = {
  random,
  toFixed,
  isNaN,
  isNumber,
  isInteger,
  isPositive,
  isNegative,
  isZero,
  countDecimalPlaces,
  convertNumberToString,
  convertStringToNumber,
  convertHexToString,
  convertStringToHex,
  convertHexToNumber,
  convertNumberToHex,
  greaterThan,
  greaterThanOrEqual,
  smallerThan,
  smallerThanOrEqual,
  multiply,
  divide,
  floorDivide,
  mod,
  add,
  subtract,
  convertAmountToRawNumber,
  convertAmountFromRawNumber,
  handleSignificantDecimals,
  formatSignificantDecimals,
  formatFixedDecimals,
  formatInputDecimals
};
