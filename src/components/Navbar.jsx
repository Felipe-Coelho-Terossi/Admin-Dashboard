export function Navbar({ user, onLogout }) {
  return (
    <nav style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent)' }}>◆</span>
        <span style={{ fontSize: '16px', fontWeight: '600' }}>AdminPanel</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '14px', fontWeight: '500' }}>{user.name}</p>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{user.role}</p>
        </div>

        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '14px',
        }}>
          {user.name[0].toUpperCase()}
        </div>

        <button
          onClick={onLogout}
          style={{
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.4rem 0.875rem',
            color: 'var(--text-secondary)',
            fontSize: '13px',
            transition: 'all 0.2s',
          }}
          onMouseOver={e => {
            e.target.style.borderColor = 'var(--danger)'
            e.target.style.color = 'var(--danger)'
          }}
          onMouseOut={e => {
            e.target.style.borderColor = 'var(--border)'
            e.target.style.color = 'var(--text-secondary)'
          }}
        >
          Sair
        </button>
      </div>
    </nav>
  )
}   