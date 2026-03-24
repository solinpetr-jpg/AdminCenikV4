import { useNavigate } from 'react-router-dom'
import { AUTH_STORAGE_KEY } from './AuthGate'
import LoginForm from './LoginForm'

const envPassword = import.meta.env.VITE_ACCESS_PASSWORD as string | undefined
const expectedPassword = envPassword ?? (import.meta.env.DEV ? 'dev' : '')

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSuccess = () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, '1')
    navigate('/', { replace: true })
  }

  return <LoginForm expectedPassword={expectedPassword} onSuccess={handleSuccess} />
}
