import { getTransactions } from '@remote/transaction'
import { useInfiniteQuery } from 'react-query'
import useUser from '@hooks/useUser'

function useTransactions({ suspense }: { suspense?: boolean } = {}) {
  const user = useUser()

  return useInfiniteQuery(
    ['transations', user?.id],
    ({ pageParam }) =>
      getTransactions({ userId: user?.id as string, pageParam }),
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
      suspense,
    },
  )
}

export default useTransactions
