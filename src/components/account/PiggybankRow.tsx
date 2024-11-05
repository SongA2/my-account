import ListRow from '@shared/ListRow'
import Image from 'next/image'
import { useRouter } from 'next/router'

function PiggybankRow() {
  const navigator = useRouter()

  return (
    <div>
      <ul>
        <ListRow
          left={
            <Image
              src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-24-512.png"
              width={40}
              height={40}
              alt=""
            />
          }
          contents={
            <ListRow.Texts
              title="저금통"
              subTitle="매일 매일 조금씩 저금하여 목표금액을 모아보아요"
            />
          }
          withArrow
          onClick={() => navigator.push('/account/piggybank/new')}
        />
      </ul>
    </div>
  )
}

export default PiggybankRow
