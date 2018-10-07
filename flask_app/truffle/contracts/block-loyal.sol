pragma solidity ^0.4.18;

contract Loyalty{

	struct customer{
		address memberAddress;
		uint tokensBought;
		bool canBuy;
	}

	string public name;
	
	uint8 public decimals = 18;

	mapping (address => uint256) public balanceOf;

	mapping (address => customer) public memberList; 
	
	mapping (bytes32 => uint) public tokensReceived;
	
	bytes32[] public customerList;

	uint public totalTokens; 
	uint public balanceTokens; //no of remaining tokens
	uint public tokenPrice;   //price per token
	event Transfer(address indexed from, address indexed to, uint256 value);
	constructor(uint tokens, uint pricePerToken, bytes32[] customerNames) public {
		
		customerList =customerNames;
		totalTokens=tokens;
		balanceTokens=tokens;
		tokenPrice=pricePerToken;

	}

	function totalTokensFor(bytes32 _customer) view public returns (uint){
		return tokensReceived[_customer]; 
	}

	function transfer(address _from, address _to, uint _value) public {
		require(_to != 0x0);
		// Check if the sender has enough
		require(balanceOf[_from] >= _value);
		// Check for overflows
		require(balanceOf[_to] + _value >= balanceOf[_to]);
		// Save this for an assertion in the future
		//uint previousBalances = balanceOf[_from] + balanceOf[_to];
		// Subtract from the sender
		balanceOf[_from] -= _value;
		// Add the same to the recipient
		balanceOf[_to] += _value;
		emit Transfer(_from, _to, _value);

	}

	function totalTokensUsed(uint[] _tokensUsedPerMember) private pure returns (uint){
		uint totalUsedTokens=0;
		for (uint i=0;i<_tokensUsedPerMember.length;i++){
			totalUsedTokens +=_tokensUsedPerMember[i];
		}
		return totalUsedTokens;
	}

	function tokensSold() view public returns (uint) {
		return totalTokens - balanceTokens;
	}

	function allcustomers() view public returns (bytes32[]) {
		return customerList;
	}


	function buy() payable public returns (uint) {
		uint tokensToBuy = msg.value / tokenPrice;
		require(tokensToBuy <= balanceTokens);
		memberList[msg.sender].memberAddress = msg.sender;
		memberList[msg.sender].tokensBought += tokensToBuy;
		balanceTokens -= tokensToBuy;
		return tokensToBuy;
	}
}