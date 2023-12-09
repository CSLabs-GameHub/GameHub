import { authFetch } from './authFetch'

export const getCurrentUser = async () => {
  const response = await authFetch('/current-user')

  console.log(response)

  return response.data
}
