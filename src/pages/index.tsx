import dynamic from 'next/dynamic' // NOTE: 간단하게 생각하면 리액트 lazy와 suspense가 합쳐져 있다.

import Account from '@components/home/Account'
import { BannerSkeleton } from '@components/home/EventBanners'
import { CreditScoreSkeleton } from '@components/home/CreditScore'
import Spacing from '@shared/Spacing'

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  ssr: false,
  loading: () => <BannerSkeleton />,
})

const CreditScore = dynamic(() => import('@components/home/CreditScore'), {
  ssr: false,
  loading: () => <CreditScoreSkeleton />,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
      <Spacing size={8} backgroundColor="gray100" />
      <CreditScore />
    </>
  )
}
