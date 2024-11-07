import { COLLECTIONS } from '@/constants/collection'
import { store } from '@/remote/firebase'
import Button from '@shared/Button'
import { collection, doc, writeBatch } from 'firebase/firestore'

const FAQS = [
  {
    question: 'MyAccount 는 어떤 서비스인가요',
    answer: '유저에게 편리한 경험을 제공해주는 자산 서비스입니다.',
  },
  {
    question: 'MyAccount 는 어떤 서비스인가요',
    answer: '유저에게 편리한 경험을 제공해주는 자산 서비스입니다.',
  },
  {
    question: 'MyAccount 는 어떤 서비스인가요',
    answer: '유저에게 편리한 경험을 제공해주는 자산 서비스입니다.',
  },
]

function FAQAddButton() {
  const handleButtonClick = () => {
    const batch = writeBatch(store)

    FAQS.forEach((faq) => {
      const docRef = doc(collection(store, COLLECTIONS.FAQ))

      batch.set(docRef, faq)
    })

    batch.commit().then(() => {
      window.alert('FAQ 데이터 추가!')
    })
  }

  return <Button onClick={handleButtonClick}>FAQ 데이터추가</Button>
}

export default FAQAddButton
