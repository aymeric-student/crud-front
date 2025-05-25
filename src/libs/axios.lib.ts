import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
}

const api: AxiosInstance = axios.create(axiosConfig)
export default api
