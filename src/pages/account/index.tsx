import Spacing from '@components/shared/Spacing'
import withAuth from '@hooks/withAuth'
import dynamic from 'next/dynamic'

const MonthlyChart = dynamic(() => import('@components/account/MonthlyChart'))
const PiggybankRow = dynamic(() => import('@components/account/PiggybankRow'))
const CategoryPieChart = dynamic(
  () => import('@components/account/CategoryPieChart'),
)
const Transactions = dynamic(() => import('@components/account/Transactions'))

function AccountPage() {
  return (
    <div>
      <MonthlyChart chartData={generateMothlyChartData()} />
      <Spacing size={8} backgroundColor="gray100" style={{ margin: '20 0' }} />
      <PiggybankRow />
      <Spacing size={8} backgroundColor="gray100" style={{ margin: '20 0' }} />
      <CategoryPieChart chartData={generatePieChartData()} />
      <Spacing size={8} backgroundColor="gray100" style={{ margin: '20 0' }} />
      <Transactions />
    </div>
  )
}

function generatePieChartData() {
  return ['카페', '쇼핑', '여행', '식비'].map((label) => ({
    label,
    amount: Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000,
  }))
}

function generateMothlyChartData() {
  return [
    '2023-01-31',
    '2023-02-28',
    '2023-03-31',
    '2023-04-30',
    '2023-05-31',
    '2023-06-30',
    '2023-07-31',
    '2023-08-31',
    '2023-09-30',
    '2023-10-31',
    '2023-11-30',
    '2023-12-31',
  ].map((date) => ({
    date,
    balance: Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000,
  }))
}

export default withAuth(AccountPage)
