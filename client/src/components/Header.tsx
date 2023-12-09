import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { AiFillHome } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { axiosBaseUrl } from '../utils/baseUrls'
import axios from 'axios'
import { logoutUser } from '../redux/userReducer'

const Header = () => {
  const [showLogoutBtn, toggleLogoutBtn] = useState(false)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  // console.log(user)

  const handleLogout = async () => {
    try {
      await axios.post(axiosBaseUrl + '/auth/signout')
      toggleLogoutBtn(false)
      dispatch(logoutUser())
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className="absolute top-0 w-full px-4 py-4
      flex justify-between items-center"
    >
      <Link
        to="/"
        className={`w-12 h-12 flex flex-col justify-center items-center
        rounded-full
        cursor-pointer hover:shadow-basicLg hover:scale-110 transition-all
      ${
        pathname === '/'
          ? 'text-discord border-2 border-discord'
          : 'text-colorDark bg-discord hover:shadow-shDiscordRev'
      }`}
      >
        <AiFillHome className="w-8 h-8" />
      </Link>
      <div className="relative">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
        border-2 border-discord rounded-full
        cursor-pointer hover:shadow-basicLg hover:scale-110 transition-all"
          title="Player Options"
          alt="user avatar"
          src={
            user.avatar
              ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
              : `https://cdn.discordapp.com/embed/avatars/${user.discriminator}.png`
          }
          onClick={() => toggleLogoutBtn(!showLogoutBtn)}
        />
        {showLogoutBtn && (
          <div className="absolute top-16 right-0 opacity-0 animate-fadein transition-all">
            <button
              className="w-max py-2 px-4 bg-discord rounded-md hover:scale-105 transition-all"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
