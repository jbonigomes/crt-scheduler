export default ({ onClick, disabled, danger, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={[
      'p-4',
      'w-full',
      'rounded',
      'font-bold',
      'uppercase',
      'text-white',
      disabled ? 'bg-current/50' : '',
      danger ? 'bg-red-600' : 'bg-blue-600',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    ].join(' ')}
  >
    {children}
  </button>
)
