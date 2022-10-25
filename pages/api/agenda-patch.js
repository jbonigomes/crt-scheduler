export default async (req, res) => {
  const url = 'https://crt-scheduler.hasura.app/api/rest/patch-agenda'

  const params = {
    method: 'PATCH',
    body: req.body,
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_SECRET,
    },
  }

  const { update_agenda_by_pk } = await (await fetch(url, params)).json()

  res.status(200).json(update_agenda_by_pk)
}
