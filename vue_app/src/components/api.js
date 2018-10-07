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

export function getBuyer (id) {
  console.log('in get buyer')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/buyer/` + id)
        .then(response => {
          var data = response.data
          console.log('buyer:', data)

          console.log(web3.eth)
          var myContract = new web3.eth.Contract(jsonInterface.abi, '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42', {
            from: '0x84B0a26eFce6A3a4E60cF29e577392755D4D3673', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
          })
          console.log('contract', myContract)
          console.log('method', myContract.methods.balanceOf('0x84B0a26eFce6A3a4E60cF29e577392755D4D3673'))

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
