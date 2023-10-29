# GraphProtocolForTranferToken
This Subgraph for simple Token transfer Smartcontract.

contract :

//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Transfer{
    event TransferEvent(address from , address to ,uint amount);
    event ChangeNameEvent(string name);

    string public name = "CTE";
    uint public id = 1;

    function transfer(address payable to) public payable{
        to.transfer(msg.value);
        emit TransferEvent(msg.sender ,to, msg.value);
    }
    function changeName(string calldata _name) public{
        name = _name;
        emit ChangeNameEvent(_name);
    }
    function changeId(string calldata _name) public{
        name = _name;  
    }

}


create & deploy subgraph for this contract on https://thegraph.com/ website.

![image](https://github.com/Harsh0R/GraphProtocolForTranferToken/assets/140328237/b9ec4c10-5731-46cd-8e58-fc108d86fc7e)

![image](https://github.com/Harsh0R/GraphProtocolForTranferToken/assets/140328237/7a5724d9-f159-4e8c-bd66-0b9763ec6751)



