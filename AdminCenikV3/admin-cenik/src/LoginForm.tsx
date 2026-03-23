import { Lock } from 'lucide-react'
import { useState } from 'react'

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#7dd3fc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: '#374151',
    marginBottom: 24,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: 15,
    border: '2px solid #7dd3fc',
    borderRadius: 8,
    boxSizing: 'border-box' as const,
    marginBottom: 16,
    outline: 'none',
  },
  error: {
    color: '#dc2626',
    fontSize: 14,
    margin: '0 0 12px',
  },
  button: {
    width: '100%',
    padding: '12px 16px',
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
    background: '#2563eb',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
}

type Props = {
  expectedPassword: string
  onSuccess: () => void
}

export default function LoginForm({ expectedPassword, onSuccess }: Props) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password === expectedPassword) {
      onSuccess()
    } else {
      setError('Nesprávné heslo.')
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.iconCircle}>
          <Lock size={32} color="white" strokeWidth={2} />
        </div>
        <h1 style={styles.title}>Zadejte heslo</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Heslo"
            autoComplete="current-password"
            autoFocus
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            <Lock size={18} color="white" strokeWidth={2} />
            <span>Odemknout</span>
          </button>
        </form>
      </div>
    </div>
  )
}
