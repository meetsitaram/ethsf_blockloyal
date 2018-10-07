import axios from 'axios'
import Web3 from 'Web3'
import contract from 'truffle-contract'
import jsonInterface from '../../../flask_app/truffle/build/contracts/JetBlueRewardsToken.json'
var Tx = require('ethereumjs-tx')
var loyalty = contract(jsonInterface)
// var Tx = require('ethereumjs-tx')
console.log('jsonI:', loyalty)
window.me = function (c) {
  loyalty.deployed().then(function (contractInstance) {
    console.log('ci', contractInstance)
  }).catch(e => {
    console.log(e)
  })
}

// var ganache = require('ganache-cli')
// let web3 = new Web3(ganache.provider())
// let web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545')
let web3 = new Web3(new Web3.providers.HttpProvider(
  'https://ropsten.infura.io/6c4b7dba622c41db83127068d0ca3e95'
))

export function getContractSupply () {
  console.log('in getContractSupply')
  return new Promise(
    function (resolve, reject) {
      // var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      // var fromAddress = '0x14445fBaF5d3E9ABE0c89347CD13B8b94A9E1E24'
      var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      var fromAddress = '0x5b4e21a994e0efa3ca2d73ecdb1f4bdd8bffc5a6'

      // var contractAddress = '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'
      // var fromAddress = '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'
      var myContract = new web3.eth.Contract(jsonInterface.abi, contractAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      })
      console.log('contract', myContract)
      // myContract.methods.balanceOf('0x84B0a26eFce6A3a4E60cF29e577392755D4D3673').call()
      myContract.methods.totalSupply().call()
        .then(response => {
          console.log('contract supply:', response)

          resolve(response)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getBalance () {
  console.log('in getBalance')
  return new Promise(
    function (resolve, reject) {
      var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      var fromAddress = '0x5b4e21a994e0efa3ca2d73ecdb1f4bdd8bffc5a6'
      // var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      // var fromAddress = '0x14445fbaf5d3e9abe0c89347cd13b8b94a9e1e24'

      // var contractAddress = '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'
      // var fromAddress = '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'
      var myContract = new web3.eth.Contract(jsonInterface.abi, contractAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      })
      console.log('contract', myContract)
      myContract.methods.balanceOf(fromAddress).call()
        .then(response => {
          console.log('balance:', response)
          resolve(response)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function transfer () {
  console.log('in transfer')
  return new Promise(
    function (resolve, reject) {
      // var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      // var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      var fromAddress = '0x5b4e21a994e0efa3ca2d73ecdb1f4bdd8bffc5a6'
      var toAddress = '0x14445fbaf5d3e9abe0c89347cd13b8b94a9e1e24'
      // var toAddress = '0x97c3c2e4f5f1e8e295a1f810bbf720bd1abb9559'
      // var toAddress = '0xC97218E5370269Db02B7Fbd5d16D2C20392e3481'

      // var contractAddress = '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'
      // var fromAddress = '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'
      var myContract = new web3.eth.Contract(jsonInterface.abi, contractAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      })
      console.log('contract', myContract)


      // I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
      var rawTransaction = {
        'from': fromAddress,
        'gasPrice': 20000000000,
        'gas': 30000,
        'to': contractAddress,
        'value': 1,
        'data': myContract.methods.transfer(toAddress, 1).encodeABI(),
        'chainId': 0x01
      }

      var Buffer = require('safe-buffer').Buffer
      var privKey = new Buffer('YOUR_PRIVATE_KEY', 'hex')
      var tx = new Tx(rawTransaction)
      tx.sign(privKey)
      var serializedTx = tx.serialize()
      web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .then(receipt => {
          console.log('transfer receipt:', receipt)
          resolve(receipt)
        })
        .catch(e => {
          console.log('transfer failure:', e)
          reject(e)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getContractName () {
  console.log('in getContractName')
  return new Promise(
    function (resolve, reject) {
      // var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      // var fromAddress = '0x14445fBaF5d3E9ABE0c89347CD13B8b94A9E1E24'
      var contractAddress = '0xc9F0454C156A0b266a9bA95885f484Eeb668AC9E'
      var fromAddress = '0x5b4e21a994e0efa3ca2d73ecdb1f4bdd8bffc5a6'

      // var contractAddress = '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'
      // var fromAddress = '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'
      var myContract = new web3.eth.Contract(jsonInterface.abi, contractAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      })
      console.log('contract', myContract)
      // myContract.methods.balanceOf('0x84B0a26eFce6A3a4E60cF29e577392755D4D3673').call()
      myContract.methods.name().call()
        .then(response => {
          console.log('contract name:', response)

          resolve(response)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getBuyer (id) {
  console.log('in get buyer')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/buyer/` + id)
        .then(response => {
          var data = response.data
          console.log('buyer:', data)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getSeller (id) {
  console.log('in get buyer')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/seller/` + id)
        .then(response => {
          var data = response.data
          console.log('buyer:', data)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getContract (id) {
  console.log('in get contract')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/contract/` + id)
        .then(response => {
          var data = response.data
          console.log('buyer:', data)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
}
