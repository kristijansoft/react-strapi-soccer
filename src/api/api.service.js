import axios from 'axios'
import JwtService from './jwt.service'

const token = JwtService.getItem('token')
axios.defaults.baseURL = 'https://pavelon-api.herokuapp.com/v1/api'
axios.defaults.headers.common = { Authorization: `Bearer ${token}` }

const headers = () => {
  const token = JwtService.getItem('token')
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      window.location.replace('/auth')
    }
    return Promise.reject(error)
  }
)

export const dispatch = (data, url) => axios.post(url, data, headers())
export const receive = (url) => axios.get(url, headers())
export const mutate = (data, url) => axios.put(url, data, headers())
export const remove = (url) => axios.delete(url, headers())

export default axios
