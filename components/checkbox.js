export default ({ selected, onSelect, label }) => (
  <button
    onClick={onSelect}
    className={[
      'p-4',
      'my-2',
      'flex',
      'w-full',
      'border',
      'rounded',
      'border-solid',
      'items-center',
      'hover:border-blue-700',
      selected ? 'border-blue-600' : 'border-gray-300'
    ].join(' ')}
  >
    <div
      className={[
        'w-5',
        'h-5',
        'mr-6',
        'flex',
        'border',
        'flex-none',
        'border-solid',
        'rounded-full',
        'items-center',
        'justify-center',
        'border-gray-400',
      ].join(' ')}
    >
      <div
        className={[
          'w-3',
          'h-3',
          'rounded-full',
          selected ? 'bg-blue-600' : '',
        ].join(' ')}
      />
    </div>
    <div className="flex-1 text-left">{label}</div>      
  </button>
)
