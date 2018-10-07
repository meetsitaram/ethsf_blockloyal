pragma solidity ^0.4.18;

contract Loyal{
	string public name;
	uint256 public totalSupply;
	struct member{
		address memberAddress;
		uint tokensBought;
		uint[] tokenspermember;
		bool canBuy;

	}
	mapping (address => member) public memberList; 
	constructor() public {


	}

	function buy() public {


	}

	function sell() public{

	}

	function transfer() public{

	}
}