import axios from 'axios'

import Web3 from 'Web3'
console.log(Web3)
// import UnitedMileagePlusToken from '../../../../flask_app/truffle/build/UnitedMileagePlusToken.json'
// var myContract = new web3.eth.Contract(jsonInterface, '0x5b1056e3EcC0f5dBFD332275A3d11D9d37422D42'], {
//   from: '0x1234567890123456789012345678901234567891', // default from address
//   gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });

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
