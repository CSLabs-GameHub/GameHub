import axios from 'axios'

const authFetch = axios.create({
  // baseURL: 'http://gamehub.dev/api/v1',
  baseURL: '/api/v1',
  // headers: {
  //   Host: 'gamehub.dev',
  // },
  // DEV:PROD
  withCredentials: false,
  // withCredentials: true,
  // proxy: {
  //   protocol: 'http',
  //   host: '0.0.0.0',
  //   port: 3000,
  // },
})

authFetch.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    // console.log(err.response)
    console.log(err)
    if (err.response.status === 401) {
      // logoutUser()
    }
    return Promise.reject(err)
  },
)

export { authFetch }
