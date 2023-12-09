import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Forbidden = () => {
  const [magicWord, setMagicWord] = useState<string[]>([])
  const magicWordStr = "YOU DIDN'T SAY THE MAGIC WORD!"

  useEffect(() => {
    if (magicWord.length >= 175) return
    setTimeout(() => {
      setMagicWord((prev) => [...prev, magicWordStr])
    }, 100)
  }, [magicWord])

  return (
    <div className="w-full h-screen flex max-h-screen bg-blue-600 relative overflow-hidden">
      <Link to="/">
        <img
          className="w-[350px] h-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-md shadow-basicLg border-8 border-black/50 animate-fadein opacity-0 hover:scale-105 transition-all"
          src="https://media0.giphy.com/media/5ftsmLIqktHQA/giphy.gif"
          alt="forbidden"
        />
      </Link>
      <div className="flex flex-col flex-wrap">
        {magicWord.map((s) => (
          <h3 key={nanoid()} className="mx-1 text-lg text-black">
            {s}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Forbidden
