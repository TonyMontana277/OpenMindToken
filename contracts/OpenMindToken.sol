// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // Import Ownable for authorization control

contract OpenMindToken is ERC20, Ownable {
    constructor(
    string memory name,
    string memory symbol,
    uint initialSupply
) ERC20(name, symbol) {
    require(initialSupply > 0, "Initial supply has to be greater than 0");
    _mint(msg.sender, initialSupply * 10**18);
}
    // Mint new tokens and send them to the specified address.
    // Only the owner (contract creator) can call this function.
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Burn a specific amount of tokens from the sender's balance.
    // Only the owner (contract creator) can call this function.
    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount);
    }

    // Burn tokens from a specific address's balance.
    // Only the owner (contract creator) can call this function.
    function burnFrom(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }
}
