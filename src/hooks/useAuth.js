import { useState } from 'react'

const USERS = [
  { id: 1, email: 'admin@dashboard.com', password: 'admin123', role: 'admin', name: 'Admin' },
  { id: 2, email: 'user@dashboard.com',  password: 'user123',  role: 'user',  name: 'Felipe' },
]

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState('')

  function login(email, password) {
    const found = USERS.find(u => u.email === email && u.password === password)
    if (found) {
      setCurrentUser(found)
      setError('')
    } else {
      setError('Email ou senha incorretos.')
    }
  }

  function logout() {
    setCurrentUser(null)
  }

  return { currentUser, login, logout, error }
}