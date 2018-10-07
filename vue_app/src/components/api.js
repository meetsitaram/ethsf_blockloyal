import axios from 'axios'
import Web3 from 'Web3'
import contract from 'truffle-contract'
import jsonInterface from '../../../flask_app/truffle/build/contracts/UnitedMileagePlusToken.json'
var loyalty = contract(jsonInterface)
console.log('jsonI:', loyalty)
window.me = function (c) {
  loyalty.deployed().then(function (contractInstance) {
    console.log('ci', contractInstance)
  }).catch(e => {
    console.log(e)
  })
}

// var ganache = require('ganache-cli')
// web3.setProvider(ganache.provider());
let web3 = new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545')
// let web3 = new Web3(ganache.provider())

export function getContractSupply () {
  console.log('in getContractSupply')
  return new Promise(
    function (resolve, reject) {
      var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      var fromAddress = '0x14445fBaF5d3E9ABE0c89347CD13B8b94A9E1E24'

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
      var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      var fromAddress = '0x14445fbaf5d3e9abe0c89347cd13b8b94a9e1e24'

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
      var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      var fromAddress = '0x14445fbaf5d3e9abe0c89347cd13b8b94a9e1e24'
      // var toAddress = '0x97c3c2e4f5f1e8e295a1f810bbf720bd1abb9559'
      var toAddress = '0xC97218E5370269Db02B7Fbd5d16D2C20392e3481'

      // var contractAddress = '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'
      // var fromAddress = '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'
      var myContract = new web3.eth.Contract(jsonInterface.abi, contractAddress, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      })
      console.log('contract', myContract)
      myContract.methods.transfer(toAddress, 1).call()
        .then(response => {
          console.log('transfer:', response)
          resolve(response)
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
      var contractAddress = '0x5ddf50d5c542d7ce48cc3d3c58f1fd484f4e820c'
      var fromAddress = '0x14445fBaF5d3E9ABE0c89347CD13B8b94A9E1E24'

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
//
// export function getBuy (params) {
//   console.log('in get buyer')
//   return new Promise(
//     function (resolve, reject) {
//       axios.post(`http://127.0.0.1:5000/buy`, params)
//         .then(response => {
//           var data = response.data
//           console.log('buy:', data)
//           resolve(data)
//         })
//         .catch(e => {
//           reject(e)
//         })
//     })
// }
//
// export function getSell (params) {
//   console.log('in get sell')
//   return new Promise(
//     function (resolve, reject) {
//       axios.get(`http://127.0.0.1:5000/sell`, params)
//         .then(response => {
//           var data = response.data
//           console.log('sell:', data)
//           resolve(data)
//         })
//         .catch(e => {
//           reject(e)
//         })
//     })
// }
//
// export function transfer (params) {
//   console.log('in get sell')
//   return new Promise(
//     function (resolve, reject) {
//       axios.get(`http://127.0.0.1:5000/transfer`, params)
//         .then(response => {
//           var data = response.data
//           console.log('sell:', data)
//           resolve(data)
//         })
//         .catch(e => {
//           reject(e)
//         })
//     })
// }

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
