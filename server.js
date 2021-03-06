var express = require('express');
var bodyparser = require('body-parser')
var cors = require('cors')
var app = express();
app.use(bodyparser.json())
app.use(cors())

const data = {
    salesDetails: [
      {"label": "REVENUE", "profit": 57.7, "color": "#FC6443", "change": 31.2, "isChart": false, "increasedBy":15, "previousYearProfit": 39.2},
      {"label": "GROSS PROFIT THIS YEAR", "profit": 34.5, "color": "#008641", "change": 17, "isChart": false, "previousYearProfit": 26.5},
      {"label": "COST THIS YEAR", "profit": 19.0, "color": "#398AFB", "change": 10.8, "isChart": false, "previousYearProfit": 11.4},
      {"label": "SALES THIS YEAR", "profit": 29, "color": "#194DB3", "change": 13, "isChart": true, "previousYearProfit": 15},
    ],
    productDetails: [
      {"name": "MicroSD Cards", "price": 10000, "rank": 2, "increasedBy":27},
      {"name": "Bluetooth Headphones", "price": 2000, "rank": 8, "increasedBy":18},
      {"name": "Smart TVs", "price": 20000, "rank": 12, "increasedBy":19},
      {"name": "Wireless Earphones", "price": 1200, "rank": 16, "increasedBy":10},
      {"name": "Bluetooth Speakers", "price": 45000, "rank": 3, "increasedBy":25},
      {"name": "USB Flash Drives", "price": 500, "rank": 13, "increasedBy":12},
      {"name": "Voice-activated Speakers", "price": 1650, "rank": 7, "increasedBy":14},
      {"name": "GPS Personal Trackers", "price": 17000, "rank": 14, "increasedBy":15},
      {"name": "Wired Earphones", "price": 2100, "rank": 18, "increasedBy":11},
      {"name": "Dash Cameras", "price": 28500, "rank": 21, "increasedBy":7},
      {"name": "Wi-Fi Cameras", "price": 16000, "rank": 9, "increasedBy":17},
      {"name": "POS Terminal", "price": 2999, "rank": 20, "increasedBy":9},
      {"name": "LED TV(29-inch)", "price": 77000, "rank": 11, "increasedBy":13},
      {"name": "Laptop", "price": 770000, "rank": 1, "increasedBy":26},
      {"name": "Netbooks", "price": 41999, "rank": 4, "increasedBy":15},
      {"name": "Android-based ", "price": 1900, "rank": 19, "increasedBy":14},
      {"name": "Product B", "price": 4545, "rank": 15, "increasedBy":10},
      {"name": "GPS Personal trackers", "price": 1900, "rank": 6, "increasedBy":22},
      {"name": "Product A", "price": 14000, "rank": 17, "increasedBy":20},
      {"name": "Dash Cameras", "price": 99000, "rank": 10, "increasedBy":17},
      {"name": "LED TV(39 inches)", "price": 92000, "rank": 5, "increasedBy":19}
    ]
  };


app.get('/sales-details', function (req, res) {
  res.send(data);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});