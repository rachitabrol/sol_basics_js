const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'early bread name vote sample arrange drop month carbon mercy refuse brick',
  'https://rinkeby.infura.io/v3/ac9ba8f06f474f439aa6408727aeacfa'
);
const web3 = new Web3(provider);

const deploy = async()=>{
  accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:bytecode,arguments:['Hi there!']})
  .send({gas:'1000000',from:accounts[0]});
  console.log('Contract deployed to',result.options.address);
};
deploy();
