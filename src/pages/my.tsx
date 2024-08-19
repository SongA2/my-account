import withAuth from '@shared/hocs/withAuth'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import { signOut } from 'next-auth/react'

function MyPage() {
  return (
    <div>
      <Spacing size={100} />
      <Flex justify="center">
        <Button onClick={() => signOut({ callbackUrl: '/' })}>로그아웃</Button>
      </Flex>
    </div>
  )
}

export default withAuth(MyPage)
