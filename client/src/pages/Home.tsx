import { BsDiscord } from 'react-icons/bs'
import { discordLoginUrl } from '../utils/baseUrls'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadUser, loginUser } from '../redux/userReducer'
import { authFetch } from '../utils/authFetch'
import { LoginPayload } from '../redux/userPayloadTypes'
import Loading from '../components/Loading'
// import { getCurrentUser } from '../utils/getCurrentUser'

const Home = () => {
  const user = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getCurrentUser = async () => {
    const response = await authFetch.get<LoginPayload>('/users/current-user')
    dispatch(loginUser(response.data))
  }

  useEffect(() => {
    dispatch(loadUser())
    setTimeout(() => {
      getCurrentUser()
    }, 750)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (user.username) {
      navigate('/')
    }
  }, [user, navigate])

  if (user.isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center">
        Welcome <span className="text-red-300">ECRI</span>tians
      </h1>
      <h1 className="my-6 text-4xl text-center">
        Bienvenidos <span className="text-red-300">CTRI</span>tians
      </h1>
      <a
        className={`w-[300px] px-10 py-2
        bg-discord shadow-shDiscord
        hover:shadow-shDiscordRev
        rounded-lg hover:scale-105 transition-all
        text-xl
        text-black text-center font-bold uppercase
        flex flex-col justify-center items-center`}
        href={discordLoginUrl}
      >
        <p className="">Login</p>
        <BsDiscord className="text-4xl" />
      </a>
      <h1 className="mt-12 text-4xl text-center">
        <span className="text-red-300">All others beware...</span>
      </h1>
    </div>
  )
}

export default Home
