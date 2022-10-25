import { authOptions } from './auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next'

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    const url = 'https://crt-scheduler.hasura.app/api/rest/agendar'

    const params = {
      method: 'POST',
      body: req.body,
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_SECRET,
      },
    }

    const { insert_agenda_one } = await (await fetch(url, params)).json()

    res.status(200).json(insert_agenda_one)
  } else {
    res.send({ error: 'Access denied' })
  }
}
