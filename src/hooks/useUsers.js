import { useState, useMemo } from 'react'
import data from '../data/users.json'

export function useUsers() {
  const [users, setUsers] = useState(data.users)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [page, setPage] = useState(1)
  const PER_PAGE = 8

  const filtered = useMemo(() => {
    return users.filter(user => {
      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      const matchStatus =
        statusFilter === 'all' || user.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [users, search, statusFilter])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const kpis = useMemo(() => {
    const active  = users.filter(u => u.status === 'active').length
    const churned = users.filter(u => u.status === 'churned').length
    const trial   = users.filter(u => u.status === 'trial').length
    const mrr     = users.reduce((sum, u) => sum + u.mrr, 0)
    return { active, churned, trial, mrr, total: users.length }
  }, [users])

  function addUser(user) {
    const newUser = { ...user, id: Date.now() }
    setUsers(prev => [newUser, ...prev])
    setPage(1)
  }

  function editUser(updated) {
    setUsers(prev => prev.map(u => u.id === updated.id ? updated : u))
  }

  function deleteUser(id) {
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  function handleSearch(value) {
    setSearch(value)
    setPage(1)
  }

  function handleStatus(value) {
    setStatusFilter(value)
    setPage(1)
  }

  return {
    users: paginated,
    allUsers: users,
    kpis,
    search,
    statusFilter,
    page,
    totalPages,
    handleSearch,
    handleStatus,
    setPage,
    addUser,
    editUser,
    deleteUser,
  }
}