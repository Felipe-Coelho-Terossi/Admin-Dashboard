export function Filters({ search, statusFilter, onSearch, onStatus }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
      <input
        type="text"
        placeholder="Buscar por nome ou email..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        style={{
          flex: 1,
          padding: '0.55rem 0.875rem',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          fontSize: '14px',
          outline: 'none',
        }}
      />
      <select
        value={statusFilter}
        onChange={e => onStatus(e.target.value)}
        style={{
          padding: '0.55rem 0.875rem',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          fontSize: '14px',
          outline: 'none',
        }}
      >
        <option value="all">Todos</option>
        <option value="active">Ativo</option>
        <option value="trial">Trial</option>
        <option value="inactive">Inativo</option>
        <option value="churned">Churned</option>
      </select>
    </div>
  )
}