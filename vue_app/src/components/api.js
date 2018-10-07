import axios from 'axios'

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

export function getBuy (params) {
  console.log('in get buyer')
  return new Promise(
    function (resolve, reject) {
      axios.post(`http://127.0.0.1:5000/buy`, params)
        .then(response => {
          var data = response.data
          console.log('buy:', data)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function getSell (params) {
  console.log('in get sell')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/sell`, params)
        .then(response => {
          var data = response.data
          console.log('sell:', data)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
}

export function transfer (params) {
  console.log('in get sell')
  return new Promise(
    function (resolve, reject) {
      axios.get(`http://127.0.0.1:5000/transfer`, params)
        .then(response => {
          var data = response.data
          console.log('sell:', data)
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
