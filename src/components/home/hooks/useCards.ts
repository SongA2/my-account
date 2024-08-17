import { getCards } from '@remote/card'
import { useQuery } from 'react-query'

function useCards() {
  return useQuery(['cards'], () => getCards(), {
    suspense: true,
  })
}

export default useCards
