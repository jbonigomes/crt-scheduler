import Input from '/components/input'
import Layout from '/components/layout'
import useSearch from '/hooks/useSearch'

export default ({ pacientes }) => {
  const { search, onSearch, searchFilter } = useSearch()

  return (
    <Layout active="pacientes">
      <div className="max-w-lg mx-auto px-3">
        <Input placeholder="Procurar" value={search} onChange={onSearch} />
        <ul className="mt-3">
          {pacientes.filter(searchFilter).map(({ id, nome, telefone }) => (
            <li
              key={id}
              className="flex py-4 border-b border-solid border-gray-300"
            >
              <div className="flex-1">{nome}</div>
              <a
                className="flex-none underline pointer text-blue-600"
                href={`https://api.whatsapp.com/send?phone=${telefone}`}
              >
                {telefone}
              </a>
              <button className="flex items-center ml-6">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const url = 'https://crt-scheduler.hasura.app/api/rest/pacientes'
  
  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  }

  const { pacientes } = await (await fetch(url, { headers })).json()

  return { props: { pacientes } }
}
