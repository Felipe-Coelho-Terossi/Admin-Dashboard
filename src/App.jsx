import { useAuth } from './hooks/useAuth'
import { Login } from './pages/Login'
import { AdminDashboard } from './pages/AdminDashboard'
import { UserDashboard } from './pages/UserDashboard'

function App() {
  const { currentUser, login, logout, error } = useAuth()

  if (!currentUser) {
    return <Login onLogin={login} error={error} />
  }

  if (currentUser.role === 'admin') {
    return <AdminDashboard user={currentUser} onLogout={logout} />
  }

  return <UserDashboard user={currentUser} onLogout={logout} />
}

export default App