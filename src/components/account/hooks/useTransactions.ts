import { getTransactions } from '@remote/transaction'
import { useInfiniteQuery } from 'react-query'
import useUser from '@hooks/useUser'
import { TransactionFilterType } from '@models/transaction'

function useTransactions({
  suspense,
  filter,
}: { suspense?: boolean; filter?: TransactionFilterType } = {}) {
  const user = useUser()

  return useInfiniteQuery(
    ['transations', user?.id, filter],
    ({ pageParam }) =>
      getTransactions({ userId: user?.id as string, pageParam, filter }),
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
      suspense,
    },
  )
}

export default useTransactions
