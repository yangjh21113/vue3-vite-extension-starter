import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000
})

// Request interceptor — add auth token if needed
instance.interceptors.request.use(
  req => {
    // const token = localStorage.getItem('token')
    // if (token) req.headers.Authorization = `Bearer ${token}`
    return req
  },
  err => Promise.reject(err)
)

// Response interceptor — handle common error cases
instance.interceptors.response.use(
  res => res,
  err => {
    // Add global error handling here (e.g. toast notification)
    return Promise.reject(err)
  }
)

export default <T>(config: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .request(config)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data)
      })
      .catch((error: unknown) => {
        reject(error)
      })
  })
}
