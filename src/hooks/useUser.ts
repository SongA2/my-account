import { User } from '@models/user'
import { useSession } from 'next-auth/react'

function useUser() {
  const { data } = useSession()

  if (!data) return null

  return data.user as User
}

export default useUser
