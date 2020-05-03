import axios from 'axios'
import apiConfig from '../config/apiConfig'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    ...apiConfig
  }
})

export default api
