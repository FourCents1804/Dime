import * as d3 from 'd3'
const userPurchases = [
  {
    itemName: 'Mountain Dew',
    category: 'Food and Drink',
    price: 3,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Shoes',
    category: 'Shopping',
    price: 50,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Kit Kat',
    category: 'Food and Drink',
    price: 1,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 24,
    transactionId: 2,
    createdAt: '2017-07-09'
  },
  {
    itemName: 'Watch',
    category: 'Shopping',
    price: 100,
    transactionId: 3,
    createdAt: '2017-08-01'
  },
  {
    itemName: 'Headphones',
    category: 'Shopping',
    price: 15,
    transactionId: 4,
    createdAt: '2017-08-15'
  },
  {
    itemName: 'Wine',
    category: 'Food and Drink',
    price: 16,
    transactionId: 5,
    createdAt: '2017-08-30'
  },
  {
    itemName: 'Cheese',
    category: 'Food and Drink',
    price: 5,
    transactionId: 5,
    createdAt: '2017-08-30'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 12,
    transactionId: 6,
    createdAt: '2017-09-12'
  },
  {
    itemName: 'Shirt',
    category: 'Shopping',
    price: 25,
    transactionId: 7,
    createdAt: '2017-10-01'
  },
  {
    itemName: 'Movie',
    category: 'Entertainment',
    price: 15,
    transactionId: 8,
    createdAt: '2017-11-20'
  },
  {
    itemName: 'Gifts',
    category: 'Entertainment',
    price: 15,
    transactionId: 9,
    createdAt: '2017-12-20'
  },
  {
    itemName: 'Dinner',
    category: 'Food and Drink',
    price: 30,
    transactionId: 10,
    createdAt: '2017-02-10'
  },
  {
    itemName: 'Mountain Dew',
    category: 'Food and Drink',
    price: 20,
    transactionId: 11,
    createdAt: '2017-03-16'
  },
  {
    itemName: 'Concert',
    category: 'Entertainment',
    price: 45,
    transactionId: 12,
    createdAt: '2017-04-20'
  },
  {
    itemName: 'Scarf',
    category: 'Shopping',
    price: 10,
    transactionId: 13,
    createdAt: '2017-05-16'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 10,
    transactionId: 14,
    createdAt: '2017-06-04'
  },
]

		//Width and height
		var w = 500;
		var h = 300;
		var padding = 30;

		var dataset = [];
		const numDataPoints = 50
		const xRange = Math.random() * 1000
		const yRange = Math.random() * 1000
		for (let i = 0; i < numDataPoints; i++) {
			const newNum1 = Math.floor(Math.random() * xRange)
			const newNum2 = Math.floor(Math.random() * yRange)
			dataset.push([newNum1, newNum2])
		}

		//Create scale functions
		var xScale = d3.scaleLinear()
			.domain([0, d3.max(dataset, function (d) { return d[0]; })])
			.range([padding, w - padding * 2]);

		var yScale = d3.scaleLinear()
			.domain([0, d3.max(dataset, function (d) { return d[1]; })])
			.range([h - padding, padding]);

		var aScale = d3.scaleSqrt()
			.domain([0, d3.max(dataset, function (d) { return d[1]; })])
			.range([0, 10]);

		//Define X axis
		var xAxis = d3.axisBottom()
			.scale(xScale)
			.ticks(5)

		const yAxis = d3.axisLeft()
			.scale(yScale)
			.ticks(5)

		//Create SVG element
		var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

		//Create circles
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function (d) {
				return xScale(d[0]);
			})
			.attr("cy", function (d) {
				return yScale(d[1]);
			})
			.attr("r", function (d) {
				return aScale(d[1]);
			});

		//Create labels
		// svg.selectAll("text")
		// 	.data(dataset)
		// 	.enter()
		// 	.append("text")
		// 	.text(function (d) {
		// 		return d[0] + "," + d[1];
		// 	})
		// 	.attr("x", function (d) {
		// 		return xScale(d[0]);
		// 	})
		// 	.attr("y", function (d) {
		// 		return yScale(d[1]);
		// 	})
		// 	.attr("font-family", "sans-serif")
		// 	.attr("font-size", "11px")
		// 	.attr("fill", "red");


		//Create X axis
		svg.append("g")
			.attr('class', 'axis')
			.attr('transform', `translate(0, ${h - padding})`)
			.call(xAxis);

		svg.append('g')
			.attr('class', 'axis')
			.attr('transform', `translate(${padding},0)`)
      .call(yAxis)

export default svg
