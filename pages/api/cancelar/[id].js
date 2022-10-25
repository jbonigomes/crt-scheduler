import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next'

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
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

    res.status(200).json(delete_agenda_by_pk)
  } else {
    res.send({ error: 'Access denied' })
  }
}
