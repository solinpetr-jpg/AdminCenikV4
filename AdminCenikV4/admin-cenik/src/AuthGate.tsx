import { useState, useEffect, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const AUTH_STORAGE_KEY = 'admin-cenik-auth'

export default function AuthGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY)
    setUnlocked(stored === '1')
  }, [])

  if (unlocked === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#666' }}>
        <span>Načítám…</span>
      </div>
    )
  }

  if (!unlocked) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
