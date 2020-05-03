import CryptoJS from 'crypto-js'

const INFO_JOINED = `${process.env.REACT_APP_API_URL_TS}${process.env.REACT_APP_API_URL_PRIVATE_KEY}${process.env.REACT_APP_API_URL_PUBLIC_KEY}`

const apiConfig = {
  apikey: process.env.REACT_APP_API_URL_PUBLIC_KEY,
  hash: CryptoJS.MD5(INFO_JOINED).toString(CryptoJS.enc.Hex),
  ts: process.env.REACT_APP_API_URL_TS
}

export default apiConfig
