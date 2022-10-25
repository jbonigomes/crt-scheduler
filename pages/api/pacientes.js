export default async (_, res) => {
  const url = 'https://crt-scheduler.hasura.app/api/rest/pacientes'

  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  }

  const { pacientes } = await (await fetch(url, { headers })).json()

  res.status(200).json(pacientes)
}
