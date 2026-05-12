const STATUS_STYLES = {
  active:   { background: '#14532d', color: '#4ade80' },
  trial:    { background: '#1e3a5f', color: '#60a5fa' },
  inactive: { background: '#1e2030', color: '#8b90a7' },
  churned:  { background: '#450a0a', color: '#f87171' },
}

export function UserTable({ users, isAdmin, onEdit, onDelete }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid var(--border)' }}>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nome</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plano</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MRR</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Entrou em</th>
          {isAdmin && (
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ações</th>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr
            key={u.id}
            style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            <td style={{ padding: '0.875rem 1rem', fontWeight: '500' }}>{u.name}</td>
            <td style={{ padding: '0.875rem 1rem', color: 'var(--text-secondary)' }}>{u.email}</td>
            <td style={{ padding: '0.875rem 1rem' }}>{u.plan}</td>
            <td style={{ padding: '0.875rem 1rem' }}>
              <span style={{
                ...STATUS_STYLES[u.status],
                padding: '3px 10px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: '500',
              }}>
                {u.status}
              </span>
            </td>
            <td style={{ padding: '0.875rem 1rem' }}>
              {u.mrr > 0 ? `R$ ${u.mrr}` : '—'}
            </td>
            <td style={{ padding: '0.875rem 1rem', color: 'var(--text-secondary)' }}>{u.joined}</td>
            {isAdmin && (
              <td style={{ padding: '0.875rem 1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => onEdit(u)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                      background: 'transparent',
                      color: 'var(--text-primary)',
                      fontSize: '12px',
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(u.id)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--danger)',
                      background: 'transparent',
                      color: 'var(--danger)',
                      fontSize: '12px',
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}