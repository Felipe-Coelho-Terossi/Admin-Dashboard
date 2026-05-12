import { useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import { KPICard } from '../components/KPICard'
import { Filters } from '../components/Filters'
import { UserTable } from '../components/UserTable'
import { Pagination } from '../components/Pagination'
import { Modal } from '../components/Modal'
import { Navbar } from '../components/Navbar'
import { exportCSV } from '../utils/exportCSV'

const EMPTY_FORM = { name: '', email: '', plan: 'Starter', status: 'active', mrr: 0, joined: '', lastLogin: '' }

export function AdminDashboard({ user, onLogout }) {
  const { users, allUsers, kpis, search, statusFilter, page, totalPages, handleSearch, handleStatus, setPage, addUser, editUser, deleteUser } = useUsers()

  const [modal, setModal] = useState(null) // null | 'add' | 'edit' | 'delete'
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)

  function openAdd() {
    setForm(EMPTY_FORM)
    setModal('add')
  }

  function openEdit(u) {
    setSelected(u)
    setForm(u)
    setModal('edit')
  }

  function openDelete(id) {
    setSelected(id)
    setModal('delete')
  }

  function closeModal() {
    setModal(null)
    setSelected(null)
  }

  function handleSave() {
    if (modal === 'add') addUser(form)
    if (modal === 'edit') editUser(form)
    closeModal()
  }

  function handleDelete() {
    deleteUser(selected)
    closeModal()
  }

  function updateForm(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

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
          <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Visão Geral</h1>
          <button
            onClick={openAdd}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1.25rem',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            + Novo Usuário
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <KPICard label="Total de Usuários" value={kpis.total} />
          <KPICard label="Usuários Ativos" value={kpis.active} />
          <KPICard label="Em Trial" value={kpis.trial} />
          <KPICard label="MRR Total" value={`R$ ${kpis.mrr}`} sub={`${kpis.churned} churned`} />
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '600' }}>Usuários</h2>
            <button
              onClick={() => exportCSV(allUsers)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontSize: '13px',
              }}
            >
              Exportar CSV
            </button>
          </div>

          <Filters search={search} statusFilter={statusFilter} onSearch={handleSearch} onStatus={handleStatus} />
          <UserTable users={users} isAdmin={true} onEdit={openEdit} onDelete={openDelete} />
          <Pagination page={page} totalPages={totalPages} onPage={setPage} />
        </div>
      </div>

      {(modal === 'add' || modal === 'edit') && (
        <Modal title={modal === 'add' ? 'Novo Usuário' : 'Editar Usuário'} onClose={closeModal}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div>
              <label style={labelStyle}>Nome</label>
              <input style={inputStyle} value={form.name} onChange={e => updateForm('name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} value={form.email} onChange={e => updateForm('email', e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Plano</label>
                <select style={inputStyle} value={form.plan} onChange={e => updateForm('plan', e.target.value)}>
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Status</label>
                <select style={inputStyle} value={form.status} onChange={e => updateForm('status', e.target.value)}>
                  <option value="active">Ativo</option>
                  <option value="trial">Trial</option>
                  <option value="inactive">Inativo</option>
                  <option value="churned">Churned</option>
                </select>
              </div>
            </div>
            <div>
              <label style={labelStyle}>MRR (R$)</label>
              <input style={inputStyle} type="number" value={form.mrr} onChange={e => updateForm('mrr', Number(e.target.value))} />
            </div>
            <div>
              <label style={labelStyle}>Data de entrada (YYYY-MM-DD)</label>
              <input style={inputStyle} value={form.joined} onChange={e => updateForm('joined', e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button
              onClick={closeModal}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-secondary)', fontSize: '14px' }}
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none', background: 'var(--accent)', color: '#fff', fontSize: '14px', fontWeight: '600' }}
            >
              Salvar
            </button>
          </div>
        </Modal>
      )}

      {modal === 'delete' && (
        <Modal title="Excluir Usuário" onClose={closeModal}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={closeModal}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-secondary)', fontSize: '14px' }}
            >
              Cancelar
            </button>
            <button
              onClick={handleDelete}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none', background: 'var(--danger)', color: '#fff', fontSize: '14px', fontWeight: '600' }}
            >
              Excluir
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}