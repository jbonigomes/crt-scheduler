export default ({ placeholder, value, onChange, center, max, pattern }) => (
  <input
    type="text"
    value={value}
    maxLength={max}
    pattern={pattern}
    onChange={onChange}
    placeholder={placeholder}
    className={[
      'p-4',
      'mb-3',
      'border',
      'w-full',
      'rounded',
      'border-solid',
      'border-gray-300',
      center ? 'text-center' : 'text-left',
    ].join(' ')}
  />
)
