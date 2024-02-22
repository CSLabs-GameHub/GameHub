import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useState } from 'react'
import { authFetch } from '../utils/authFetch'
import { AxiosError } from 'axios'
import { IoIosCloseCircle } from 'react-icons/io'
import { loginUser } from '../redux/userReducer'

const Account = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [updateCohort, setUpdateCohort] = useState(false)
  const [cohort, setCohort] = useState('')
  const [rateLimitError, setRateLimitError] = useState('')

  const handleUpdate = async () => {
    if (!cohort) return
    try {
      const response = await authFetch.patch('/users/update-cohort', {
        newCohort: cohort,
      })
      dispatch(loginUser(response.data))
      setUpdateCohort(false)
      setCohort('')
      setRateLimitError('')
    } catch (err) {
      console.log(err)
      if (err instanceof AxiosError && err.response?.status === 429) {
        setRateLimitError(err.response.data)
        setUpdateCohort(false)
        setCohort('')
      }
    }
  }

  const clearError = () => {
    setUpdateCohort(false)
    setCohort(user.cohort || '')
    setRateLimitError('')
  }

  return (
    <div className="w-[600px] flex flex-col justify-center items-center bg-slate-800 py-10 px-8 rounded-md shadow-basicLg">
      <h1 className="text-4xl mb-4">My Account</h1>
      <img
        className="w-36 h-36
        border-2 border-discord rounded-full
        cursor-pointer hover:shadow-basicLg hover:scale-110 transition-all"
        title="Player Options"
        alt="user avatar"
        src={
          user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
            : `https://cdn.discordapp.com/embed/avatars/${user.discriminator}.png`
        }
      />
      <div className="my-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl underline">Username</h2>
        <h2 className="bg-black mt-2 px-8 py-2 rounded-md">{user.username}</h2>
      </div>
      <div className="my-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl underline">Nickname</h2>
        <h2 className="bg-black mt-2 px-8 py-2 rounded-md">{user.nickname}</h2>
      </div>
      <div className="my-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl underline">Cohort</h2>
        {!updateCohort ? (
          <h2
            className="bg-black mt-2 px-8 py-2 rounded-md
            cursor-pointer hover:scale-105 hover:shadow-basicLg"
            onClick={() => {
              if (!rateLimitError) {
                setUpdateCohort(true)
              }
            }}
          >
            {user.cohort || 'Not Selected'}
          </h2>
        ) : (
          <>
            <select
              className="bg-discord hover:shadow-shDiscordRev text-colorLight mt-2 px-8 py-2
            active:outline-none focus:outline-none rounded-md text-center"
              name="cohort-select"
              onChange={(e) => setCohort(e.target.value)}
              value={cohort}
            >
              <option value="">Update Cohort</option>
              <option value="CTRI 19">CTRI 19</option>
              <option value="ECRI 43">ECRI 43</option>
              <option value="ECRI 44">ECRI 44</option>
              <option value="none">None</option>
            </select>

            {cohort && (
              <>
                {!rateLimitError && (
                  <button
                    className="bg-discord rounded-md py-2 px-4 mt-2
                    shadow-shDiscordRev active:shadow-shDiscord hover:scale-105"
                    onClick={handleUpdate}
                  >
                    Click to Update
                  </button>
                )}
                {!rateLimitError && <p className="mt-2">(Only once a day)</p>}
              </>
            )}
          </>
        )}
        {rateLimitError && (
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={clearError}
          >
            <p className="mt-2">{rateLimitError}</p>
            <IoIosCloseCircle className="ml-2 mt-2" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Account
