import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'http://gamehub.dev/api/v1',
  // DEV:PROD
  withCredentials: false,
  // withCredentials: true,
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
