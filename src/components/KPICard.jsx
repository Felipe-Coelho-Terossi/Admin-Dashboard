export function KPICard({ label, value, sub }) {
  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '1.25rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
    }}>
      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </span>
      <span style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)' }}>
        {value}
      </span>
      {sub && (
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{sub}</span>
      )}
    </div>
  )
}