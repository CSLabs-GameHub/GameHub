import { Link } from 'react-router-dom'

type MenuPaths = '/me' | '/wheel-of-fortune'
type LinkText = 'My Account' | 'Wheel of Fortune'

const MainMenu = () => {
  const linkBtn = (path: MenuPaths, text: LinkText) => {
    return (
      <Link
        to={path}
        className="w-full my-2 py-4 bg-discord shadow-shDiscord
        text-center text-3xl rounded-md cursor-pointer
        hover:shadow-shDiscordRev hover:scale-105 transition-all"
      >
        {text}
      </Link>
    )
  }

  return (
    <div className="w-[350px] flex flex-col justify-center items-center bg-slate-800 py-10 px-8 rounded-md shadow-basicLg">
      <h1 className="text-4xl mb-8">Main Menu</h1>
      {linkBtn('/me', 'My Account')}
      {linkBtn('/wheel-of-fortune', 'Wheel of Fortune')}
    </div>
  )
}

export default MainMenu
