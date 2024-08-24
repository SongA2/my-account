import { collection, doc, getDoc, setDoc } from 'firebase/firestore'

import { COLLECTIONS } from '@constants/collection'
import { store } from '@remote/firebase'

export function updateCredit({
  userId,
  creditScore,
}: {
  userId: string
  creditScore: number
}) {
  return setDoc(doc(collection(store, COLLECTIONS.CREDIT), userId), {
    userId,
    creditScore,
  })
}

export async function getCredit(userId: string) {
  const snapshot = await getDoc(
    doc(collection(store, COLLECTIONS.CREDIT), userId),
  )

  if (snapshot.exists() === false) {
    return null
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Credit),
  }
}
