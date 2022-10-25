export default async (req, res) => {
  const url = `https://crt-scheduler.hasura.app/api/rest/cancelar/${req.query.id}`

  const params = {
    method: 'DELETE',
    body: req.body,
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_SECRET,
    },
  }

  const { delete_agenda_by_pk } = await (await fetch(url, params)).json()

  console.log('the resp', delete_agenda_by_pk)

  res.status(200).json(delete_agenda_by_pk)
}
