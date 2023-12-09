import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const ProtectedRoute = ({ children }: Props) => {
  const user = useSelector((state: RootState) => state.user)

  if (user.isLoading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Loading />
      </div>
    )
  }

  if (!user.username) {
    return <Navigate to="/home" />
  }

  return children
}

export default ProtectedRoute
