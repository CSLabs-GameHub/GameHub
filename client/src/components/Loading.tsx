import { useLocation } from 'react-router-dom'
import theDude from '../assets/img/the_dude.png'

const Loading: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className="w-40 h-40 flex flex-col justify-center items-center
        border-4 border-white/[0.65] border-t-green-500
        rounded-[50%] animate-loadspin"
      >
        <img src={theDude} alt="The Dude" className="animate-revspin w-3/4 mb-1" />
      </div>
      {pathname !== '/contact/thankyou' && (
        <h3 className="mt-6 text-3xl max-w-xs text-center">
          {pathname === '/player' ? 'Coming Soon' : 'Loading'}
        </h3>
      )}
    </div>
  )
}

export default Loading
