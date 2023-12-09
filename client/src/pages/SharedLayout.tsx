import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SharedLayout
