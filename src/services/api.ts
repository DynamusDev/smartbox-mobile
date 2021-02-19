import axios from 'axios'
const url = 'https://smartbox-server.herokuapp.com/'
export const api = axios.create({
  baseURL: url
})

export const sock = url