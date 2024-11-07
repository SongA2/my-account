import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { memo, useMemo } from 'react'

import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { colors } from '@styles/colorPalette'
import { AxisBottom } from '@visx/axis'
import { format, parseISO } from 'date-fns'

interface ChartData {
  date: string
  balance: number
}

interface MonthlyChartProps {
  chartData: ChartData[]
  width: number
  height: number
}

const verticalMargin = 120

const getX = (d: ChartData) => d.date
const getY = (d: ChartData) => d.balance
const formatDate = (date: string) => format(parseISO(date), 'M월')

function MonthlyChart({ chartData, width, height }: MonthlyChartProps) {
  const xMax = width
  const yMax = height - verticalMargin

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: chartData.map(getX),
        padding: 0.4,
      }),
    [xMax, chartData],
  )

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...chartData.map(getY))],
      }),
    [yMax],
  )

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="url(#teal)" rx={14} />
      <Group top={verticalMargin / 2}>
        {chartData.map((d) => {
          const date = getX(d)
          const barWidth = xScale.bandwidth()
          const barHeight = yMax - (yScale(getY(d)) ?? 0)
          const barX = xScale(date)
          const barY = yMax - barHeight
          return (
            <Bar
              key={date}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={colors.blue}
            />
          )
        })}
      </Group>
      <AxisBottom
        top={yMax + 60}
        scale={xScale}
        tickFormat={formatDate}
        stroke={colors.blue}
        tickStroke={colors.blue}
        tickLabelProps={{
          fill: colors.blue,
          fontSize: 11,
          textAnchor: 'middle',
        }}
      />
    </svg>
  )
}

interface ChartWrapperProps {
  chartData: ChartData[]
  height?: number
}

function ChartWrapper({ chartData, height = 200 }: ChartWrapperProps) {
  return (
    <ParentSize>
      {({ width }) => (
        <MonthlyChart chartData={chartData} width={width} height={height} />
      )}
    </ParentSize>
  )
}

export default memo(ChartWrapper)
