import dynamic from 'next/dynamic' // NOTE: 간단하게 생각하면 리액트 lazy와 suspense가 합쳐져 있다.

import Account from '@components/home/Account'
import { BannerSkeleton } from '@components/home/EventBanners'

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  ssr: false,
  loading: () => <BannerSkeleton />,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
    </>
  )
}
