import { useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import { KPICard } from '../components/KPICard'
import { Filters } from '../components/Filters'
import { UserTable } from '../components/UserTable'
import { Pagination } from '../components/Pagination'
import { Modal } from '../components/Modal'
import { Navbar } from '../components/Navbar'

export function UserDashboard({ user, onLogout }) {
  const { users, kpis, search, statusFilter, page, totalPages, handleSearch, handleStatus, setPage } = useUsers()

  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ name: user.name, email: user.email })

  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '0.55rem 0.875rem',
    color: 'var(--text-primary)',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
  }

  const labelStyle = {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '4px',
    display: 'block',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Navbar user={user} onLogout={onLogout} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Meu Painel</h1>
          <button
            onClick={() => setModal(true)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Editar Perfil
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <KPICard label="Usuários Ativos" value={kpis.active} />
          <KPICard label="Em Trial" value={kpis.trial} />
          <KPICard label="MRR Total" value={`R$ ${kpis.mrr}`} />
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '1.25rem' }}>Usuários da Plataforma</h2>
          <Filters search={search} statusFilter={statusFilter} onSearch={handleSearch} onStatus={handleStatus} />
          <UserTable users={users} isAdmin={false} />
          <Pagination page={page} totalPages={totalPages} onPage={setPage} />
        </div>
      </div>

      {modal && (
        <Modal title="Editar Perfil" onClose={() => setModal(false)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div>
              <label style={labelStyle}>Nome</label>
              <input
                style={inputStyle}
                value={form.name}
                onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button
              onClick={() => setModal(false)}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-secondary)', fontSize: '14px' }}
            >
              Cancelar
            </button>
            <button
              onClick={() => setModal(false)}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none', background: 'var(--accent)', color: '#fff', fontSize: '14px', fontWeight: '600' }}
            >
              Salvar
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}