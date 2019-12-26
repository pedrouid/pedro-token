pragma solidity ^0.5.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract PedroToken is ERC20, ERC20Detailed {
  constructor (address initialAccount, uint256 initialBalance) ERC20Detailed("Pedro", "PEDRO", 18) public  {
    super._mint(initialAccount, initialBalance);
  }
}