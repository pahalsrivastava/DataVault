pragma solidity ^0.8.4;

contact MessageStorage{
    string public message;
    address public owner;

    event MessageUpdated(string oldMessage, string newMessage);

    constructor(string memory initialMessage){
        messgae = initialMessage;
        owner = msg.sender;
    }

    function updateMessage(string memory newMessage) public{
        require(msg.sender == owner, "Only the owner can update the message");
        string memory oldMessage=message;
        message = newMessage;
        emit MessageUpdated(oldMessage, newMessage);
    }

    function getMessage() public view returns (string memory){
        return message;
    }
}
