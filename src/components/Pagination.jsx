export function Pagination({ page, totalPages, onPage }) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem', alignItems: 'center' }}>
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        style={{
          padding: '0.4rem 0.875rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
          background: 'var(--bg-elevated)',
          color: page === 1 ? 'var(--text-secondary)' : 'var(--text-primary)',
          fontSize: '14px',
          opacity: page === 1 ? 0.5 : 1,
        }}
      >
        ←
      </button>

      <span style={{ padding: '0.4rem 0.875rem', fontSize: '13px', color: 'var(--text-secondary)' }}>
        {page} / {totalPages}
      </span>

      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        style={{
          padding: '0.4rem 0.875rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
          background: 'var(--bg-elevated)',
          color: page === totalPages ? 'var(--text-secondary)' : 'var(--text-primary)',
          fontSize: '14px',
          opacity: page === totalPages ? 0.5 : 1,
        }}
      >
        →
      </button>
    </div>
  )
}