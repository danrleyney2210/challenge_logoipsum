import axios from 'axios'

export const BASE_URL =
  'https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1/ticket'

export const api = axios.create({
  baseURL: BASE_URL
})
