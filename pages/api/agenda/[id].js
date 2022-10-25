export default async (req, res) => {
  const url = `https://crt-scheduler.hasura.app/api/rest/agenda/${req.query.id}`

  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  }

  const { agenda_by_pk } = await (await fetch(url, { headers })).json()

  res.status(200).json(agenda_by_pk)
}
