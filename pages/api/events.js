export default async (_, res) => {
  const url = 'https://crt-scheduler.hasura.app/api/rest/agenda'

  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  }

  const { agenda } = await (await fetch(url, { headers })).json()

  const events = agenda.map(({ id, from, to, paciente }) => ({
    id,
    end: to,
    start: from,
    title: paciente.nome,
  }))

  res.status(200).json(events)
}
