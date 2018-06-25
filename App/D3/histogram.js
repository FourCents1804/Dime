const purchases = require('../../seed/purchaseData')
import React from 'react'
const d3 = require('d3')
import { ART, View } from 'react-native';
import { YAxis, XAxis, BarChart, Grid } from 'react-native-svg-charts'

const {
    Surface,
    Group,
    Shape,
    ClippingRectangle
  } = ART

const {
  Rectangle
} = Shape

import Svg, {
  Rect,
  Circle,
} from 'react-native-svg'

const Histogram = props => {

  console.log('rect', ClippingRectangle)
  const width = 200
  const height = 200

  const padding = 20

  const formatter = d3.timeFormat('%b %Y')
  const parser = d3.timeParse('%b %Y')

  const data = d3.nest()
    .key(d => formatter(new Date(d.createdAt)))
    .sortKeys((a, b) => parser(a) - parser(b))
    .rollup(d => d3.sum(d, g => g.amount))
    .entries(purchases)

  const x = d3.scaleTime()
    .domain(d3.extent(data, d => parser(d.key)))
    .range([padding, width - padding])

  const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
    .range([height - padding, padding])

  const xAxis = d3.axisBottom()
    .scale(x)
    .ticks(6)

  const yAxis = d3.axisLeft()
    .scale(y)
    .ticks(5)

  console.log('xAxis', xAxis)

  return (
    <Svg
    height={height}
    width={width}
>
    {data.map(purchase => (
    <Rect
      key={purchase.key}
      x={x(parser(purchase.key))}
      y={height - y(purchase.value)}
      width={(width - 2 * padding) / data.length}
      height={y(purchase.value)}
      stroke="blue"
      strokeWidth="1"
      fill="rgba(0,0,255,.5)"
    />
    ))}
    </Svg>
  )
}

export default Histogram
