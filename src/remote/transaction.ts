import { Transaction } from '@models/transaction'
import { COLLECTIONS } from '@constants/collection'
import { store } from '@remote/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

export function createTransaction(newTransaction: Transaction) {
  return setDoc(doc(collection(store, COLLECTIONS.TRANSACTION)), newTransaction)
}
