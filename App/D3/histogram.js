const purchases = require('../../seed/purchaseData')
const d3 = require('d3')

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const rolledUpData = d3.nest()
  .key(d => new Date(d.createdAt).getYear() - 100).sortKeys((a, b) => a-b)
  .key(d => new Date(d.createdAt).getMonth())
  .sortKeys((a, b) => a-b)
  .rollup(d => d3.sum(d, g => g.amount))
  .entries(purchases)

const formattedData = rolledUpData.reduce((formatted, year) => formatted.concat(year.values.map(
  month => ({month: `${months[month.key]} ${year.key}`, value: month.value})
  )), [])

console.log('formattedData', formattedData)
