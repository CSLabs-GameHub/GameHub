import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
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
