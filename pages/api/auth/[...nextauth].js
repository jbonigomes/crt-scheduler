import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Senha' },
      },
      authorize({ username, password }) {
        const { env } = process

        if (username === env.USERNAME && password === env.PASSWORD) {
          return { authenticated: true }
        }

        return null
      },
    }),
  ],
}

export default NextAuth(authOptions)
