import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleChevronLeft } from 'react-icons/fa6'

const WhereArtThou: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section
      className="w-full mt-6 text-2xl
      text-center
      flex flex-col justify-center items-center"
    >
      <h1 className="">{"How'd we get over here?!"}</h1>
      <img
        src="https://c.tenor.com/2n7n23BkVM0AAAAC/happy-gilmore-get-me-outta-here.gif"
        width="480"
        height="270"
        className="w-[80%] max-w-xl my-4"
        // frameBorder="0"
        // allowFullScreen
      ></img>
      <h3 className="my-4">Get Me Outta Here</h3>
      <FaCircleChevronLeft
        className="hover:scale-110 hover:shadow-shadowLg cursor-pointer text-6xl"
        onClick={() => navigate('/home')}
      />
    </section>
  )
}

export default WhereArtThou
