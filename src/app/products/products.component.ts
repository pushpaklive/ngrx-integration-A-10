import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectors } from 'src/app/ngrx';

import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  salesDetails: any;
  productDetails: any;
  highcharts = Highcharts;
  @ViewChild('chart1') public chartEl1: ElementRef;
  @ViewChild('chart2') public chartEl2: ElementRef;
  @ViewChild('chart3') public chartEl3: ElementRef;
  public optionsforColumnChart: any = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Product Daily Sales'
    },
    xAxis: {
        categories: [
            'Electronics',
            'Groceries',
            'Fashion'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Profit (millions)'
        }
    }, {
        title: {
            text: 'Items Sold'
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Electronics',
        color: 'rgba(165,170,217,1)',
        data: [150, 73, 20],
        pointPadding: 0.3,
        pointPlacement: -0.2
    }, {
        name: 'Groceries',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40],
        pointPadding: 0.4,
        pointPlacement: -0.2
    }, {
        name: 'Fashion',
        color: 'rgba(248,161,63,1)',
        data: [183.6, 178.8, 198.5],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2,
        yAxis: 1
    }, {
        name: 'Miscellaneous',
        color: 'rgba(186,60,61,.9)',
        data: [203.6, 198.8, 208.5],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M'
        },
        pointPadding: 0.4,
        pointPlacement: 0.2,
        yAxis: 1
    }]
};

public optionsForAreaChart = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Items Sold'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Items Sold'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    credits: {
      enabled: false
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1950,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Groceries',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            7004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018 , 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 450
        ]
    }, {
        name: 'Electronics',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
        ]
    },
    {
        name: 'Fashion',
        data: [null, null, null, null, null, null, null, null, null, null,
            10, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,33000, 31000, 29000, 27000, 
            11643, 13092, 14478, 15915, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512,4502, 4502, 4500, 4500,  14478, 
            1605, 2471, 3322, 4238, 5221, 6129, 14478, 15915, 17385
        ]
    },
    {
        name: 'Miscellaneous',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,  4512,4502, 4502, 4500, 4500,  14478, 
            1605, 2471, 3322, 4238, 5221, 6129, 14478,
            21000, 20000, 19000, 18000, 18000, 17000, 
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 14478, 15915,
            11643, 13092, 14478, 15915, 17385,16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
        ]
    }]
};

public optionsForLineChart = {

    title: {
        text: 'Quantity of Products'
    },

    yAxis: {
        title: {
            text: 'No. of Products (Qty.)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2014 to 2022'
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2014
        }
    },

    series: [{
        name: 'Electronics',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Fashion',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Groceries',
        data: [11744, 17722, 16005, 19771, 1000,200, null, null]
    }, {
        name: 'Miscellaneous',
        data: [20000, 11988, 12169, 15112, 22452, 34400, 34227]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectors.selectSalesDetailsSuccessState).subscribe((allDetails: any) => {
      console.log('asjkdbsahcjkcdbnpp component : allDetails : ',allDetails)
      if (allDetails) {
        this.salesDetails = allDetails.salesDetails;
        this.productDetails = allDetails.productDetails;
        setTimeout(() => {
          this.createChart(this.chartEl1.nativeElement, this.optionsforColumnChart);
          this.createChart(this.chartEl2.nativeElement, this.optionsForAreaChart);
          this.createChart(this.chartEl3.nativeElement, this.optionsForLineChart);
        }, 1000);
      }
    })
  }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }

}
