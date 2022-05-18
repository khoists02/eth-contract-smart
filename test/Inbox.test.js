// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async() => {
  // get a list all contracts
  try {
    accounts = await web3.eth.getAccounts();
    console.log({ accounts });
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ['Hi There !!!'] })
      .send({ from: accounts[0], gas: '1000000' });
  } catch (error) {
    console.log({error});
  }
  // use one of these accounts to deploy

  // 
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  })
});