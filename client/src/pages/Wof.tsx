import { useEffect, useState } from 'react'
import { authFetch } from '../utils/authFetch'
import Loading from '../components/Loading'
import { nanoid } from 'nanoid'
import WofWheel from '../components/WofWheel'

const keyboardKeys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

interface WofGame {
  answer: string
  category: string
}

interface UserWofGame {
  badGuesses: string[]
  goodGuesses: string[]
  score: number
  win: boolean
  lose: boolean
}

const Wof = () => {
  const [game, setGame] = useState<WofGame | null>(null)
  const [userGame, setUserGame] = useState<UserWofGame | null>(null)
  const [spinAmount, setSpinAmount] = useState(0)

  useEffect(() => {
    getTodaysGame()
  }, [])

  const getTodaysGame = async () => {
    try {
      const response = await authFetch('/wof')
      setGame({
        answer: response.data.answer.toUpperCase(),
        category: response.data.category.toUpperCase(),
      })

      const userGameRes = await authFetch('/wof/my-game')
      setUserGame(userGameRes.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleGuess = async (letter: string) => {
    if (!spinAmount) {
      window.alert('Spin the wheel before you guess!')
      return
    }
    try {
      const response = await authFetch.patch('/wof/my-game', {
        guess: letter,
        dollars: spinAmount,
        answer: game?.answer,
      })
      setSpinAmount(0)
      setUserGame(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const spin = () => {
    setSpinAmount(Math.floor(Math.random() * 11) * 100)
  }

  if (!game) {
    return <Loading />
  }

  const wofBox = (char: string) => {
    return (
      <div
        key={nanoid()}
        className={`w-[45px] h-[70px] flex flex-col justify-center items-center
        mx-2 my-1 text-4xl border-yellow-300 border-2 rounded-sm
        ${char ? 'bg-yellow-100 text-black' : 'bg-green-600'}`}
      >
        {userGame?.win || userGame?.lose
          ? char
          : userGame?.goodGuesses.includes(char)
          ? char
          : ''}
      </div>
    )
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      {/* USER SCORE AND GUESSES */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl">
          Winnings:{' '}
          <span className="text-green-300 text-3xl">
            ${userGame?.score || 0}
          </span>
        </p>
        <p className="text-2xl">
          Strikes Left:{' '}
          <span className="text-red-300 text-3xl">
            {5 - (userGame?.badGuesses.length || 0)}
          </span>
        </p>
      </div>
      {/* GAME BOARD */}
      <div className="w-[75%] flex flex-wrap justify-center items-center mt-4">
        {game.answer.split(' ').map((word, index) => {
          return (
            <div key={nanoid()} className="flex justify-center items-center">
              {word.split('').map((char) => {
                return wofBox(char)
              })}
              {index < game.answer.split(' ').length - 1 && wofBox('')}
            </div>
          )
        })}
      </div>
      <p className="bg-yellow-300 text-colorDark py-1 px-4 rounded-md mt-2">
        {game?.category}
      </p>
      {/* WHEEL */}
      {!userGame?.win && !userGame?.lose ? (
        <WofWheel />
      ) : (
        <p className="bg-discord py-4 px-12 text-6xl rounded-md my-10">
          {userGame.win ? 'YOU WON!' : 'YOU LOST!'}
        </p>
      )}
      {!spinAmount && !userGame?.win && !userGame?.lose ? (
        <button
          className="mb-4 bg-discord py-2 px-12 rounded-md text-3xl
          shadow-shDiscord hover:shadow-shDiscordRev"
          onClick={spin}
        >
          SPIN
        </button>
      ) : !userGame?.win && !userGame?.lose ? (
        <p
          className="mb-4 bg-discord py-2 px-12 rounded-md text-3xl
          shadow-shDiscord"
        >
          Guess:{' '}
          <span className="text-green-500 bg-black px-4 rounded-md">
            $ {spinAmount}
          </span>
        </p>
      ) : (
        <></>
      )}
      {/* KEYBOARD */}
      <div className="flex flex-col justify-center items-center">
        {keyboardKeys.map((row) => {
          return (
            <div
              key={nanoid()}
              className="flex justify-center items-center my-1.5"
            >
              {row.map((letter) => {
                return (
                  <button
                    key={nanoid()}
                    className={`min-w-[45px] text-center
                    mx-1.5 text-2xl p-3 rounded-sm
                    ${
                      userGame?.goodGuesses.includes(letter) ||
                      userGame?.badGuesses.includes(letter)
                        ? 'text-colorLight bg-colorLight/20 border-red-300/20 border-2 cursor-not-allowed'
                        : 'text-colorDark bg-colorLight'
                    }`}
                    onClick={() => {
                      if (userGame?.goodGuesses.includes(letter)) return
                      if (userGame?.badGuesses.includes(letter)) return
                      handleGuess(letter)
                    }}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Wof
