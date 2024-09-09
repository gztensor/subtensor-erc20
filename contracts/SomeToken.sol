// SPDX-License-Identifier: OTHER

pragma solidity 0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error AccountFrozen();

contract SomeToken is ERC20, Ownable  {
  string public constant NAME = "Example Token";
  string public constant SYMBOL = "Some";
  uint public constant INITIAL_SUPPLY = 500000;

  constructor() ERC20(NAME, SYMBOL) Ownable(msg.sender) {
    _mint(msg.sender, INITIAL_SUPPLY * 10**decimals());
  }

  function mint(address to, uint256 amount) public onlyOwner {
    super._mint(to, amount);
  }
}
