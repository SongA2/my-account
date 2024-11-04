import { Transaction, TransactionType } from '@models/transaction'
import { COLLECTIONS } from '@constants/collection'
import { store } from '@remote/firebase'
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  startAfter,
  where,
} from 'firebase/firestore'

export function createTransaction(newTransaction: Transaction) {
  return setDoc(doc(collection(store, COLLECTIONS.TRANSACTION)), newTransaction)
}

export async function getTransactions({
  userId,
  pageParam,
}: {
  userId: string
  pageParam?: QuerySnapshot<TransactionType>
}) {
  const transactionQuery =
    pageParam == null
      ? query(
          collection(store, COLLECTIONS.TRANSACTION),
          where('userId', '==', userId),
          orderBy('date', 'desc'),
          limit(15),
        )
      : query(
          collection(store, COLLECTIONS.TRANSACTION),
          where('userId', '==', userId),
          orderBy('date', 'desc'),
          startAfter(pageParam),
          limit(15),
        )

  const transactionSnapshot = await getDocs(transactionQuery)

  const lastVisible =
    transactionSnapshot.docs[transactionSnapshot.docs.length - 1]

  const items = transactionSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Transaction),
  }))

  return { items, lastVisible }
}
