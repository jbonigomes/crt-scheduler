import Link from 'next/link'

const getClassName = (active) => [
  'p-4',
  'flex-1',
  'border-b-2',
  'text-center',
  'border-solid',
  active ? 'border-blue-600' : 'border-gray-200',
].join(' ')

export default ({ active, children }) => (
  <div className="h-screen flex flex-col max-w-5xl mx-auto">
    <ul className="flex-none flex mb-3">
      <li className={getClassName(active === 'agenda')}>
        <Link href="/">
          <a>Agenda</a>
        </Link>
      </li>
      <li className={getClassName(active === 'pacientes')}>
        <Link href="/pacientes">
          <a>Pacientes</a>
        </Link>
      </li>
      <li className={getClassName(active === 'cadastro')}>
        <Link href="/cadastro">
          <a>Cadastro</a>
        </Link>
      </li>
    </ul>
    <div className="flex-1">
      {children}
    </div>
  </div>
)
