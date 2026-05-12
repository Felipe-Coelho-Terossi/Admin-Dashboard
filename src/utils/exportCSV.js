export function exportCSV(users) {
  const headers = ['ID', 'Nome', 'Email', 'Plano', 'Status', 'MRR', 'Entrou em', 'Último login']
  const rows = users.map(u => [
    u.id, u.name, u.email, u.plan, u.status, u.mrr, u.joined, u.lastLogin
  ])

  const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'usuarios.csv'
  a.click()
  URL.revokeObjectURL(url)
}