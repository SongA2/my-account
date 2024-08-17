import dynamic from 'next/dynamic' // NOTE: 간단하게 생각하면 리액트 lazy와 suspense가 합쳐져 있다.
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Skeleton from '@/components/shared/Skeleton'

const EventBanners = dynamic(() => import('@/components/home/EventBanners'), {
  ssr: false,
  loading: () => (
    <Skeleton width="100%" height={100} style={{ borderRadius: 8 }} />
  ),
})

export default function Home() {
  return (
    <Container>
      <EventBanners />
      <div css={bold}>Hello</div>
    </Container>
  )
}

const Container = styled.div`
  background-color: pink;
`

const bold = css`
  font-weight: bold;
`
