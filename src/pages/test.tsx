import EventBannerAddButton from '@components/test/EventBannerAddButton'
import CardListAddButton from '@/components/test/CardListAddButton'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import EventForm from '@components/test/EventForm'
import TransactionForm from '@components/test/TransactionForm'
import FAQAddButton from '@/components/test/FAQAddButton'

function TestPage() {
  return (
    <Flex direction="column">
      <Text bold>배너</Text>
      <EventBannerAddButton />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>카드</Text>
      <CardListAddButton />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <EventForm />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>입출금 테스트</Text>
      <TransactionForm />

      <Spacing
        size={8}
        backgroundColor="gray100"
        style={{ margin: '20px 0' }}
      />

      <Text bold>FAQ 테스트</Text>
      <FAQAddButton />
    </Flex>
  )
}

export default TestPage
