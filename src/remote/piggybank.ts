import { collection, doc, setDoc } from 'firebase/firestore'

import { COLLECTIONS } from '@constants/collection'
import { store } from '@remote/firebase'
import { Piggybank } from '@models/piggybank'

export function createPiggybank(newPiggybank: Piggybank) {
  return setDoc(doc(collection(store, COLLECTIONS.PIGGYBANK)), newPiggybank)
}
