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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  highcharts = Highcharts;
  @ViewChild('charts') public chartEl: ElementRef;
  // public options: any = {
  //   chart: {
  //     type: 'gauge',
  //     plotBackgroundColor: '#2C31D4',
  //     plotBackgroundImage: null,
  //     plotBorderWidth: 10,
  //     plotShadow: true
  //   },
  //   title: {
  //     text: 'SALES THIS YEAR'
  //   },
  //   pane: {
  //     startAngle: -150,
  //     endAngle: 150,
  //     background: [{
  //       backgroundColor: {
  //         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
  //         stops: [
  //           [0, '#FFF'],
  //           [1, '#333']
  //         ]
  //       },
  //       borderWidth: 0,
  //       outerRadius: '109%'
  //     }, {
  //       backgroundColor: {
  //         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
  //         stops: [
  //           [0, '#333'],
  //           [1, '#FFF']
  //         ]
  //       },
  //       borderWidth: 1,
  //       outerRadius: '107%'
  //     }, {
  //       // default background
  //     }, {
  //       backgroundColor: '#DDD',
  //       borderWidth: 0,
  //       outerRadius: '105%',
  //       innerRadius: '103%'
  //     }]
  //   },

  //   // the value axis
  //   yAxis: {
  //     min: 0,
  //     max: 1000000,

  //     minorTickInterval: 'auto',
  //     minorTickWidth: 1,
  //     minorTickLength: 10,
  //     minorTickPosition: 'inside',
  //     minorTickColor: '#666',

  //     tickPixelInterval: 30,
  //     tickWidth: 2,
  //     tickPosition: 'inside',
  //     tickLength: 10,
  //     tickColor: '#666',
  //     labels: {
  //       step: 2,
  //       rotation: 'auto'
  //     },
  //     title: {
  //       text: 'in millions'
  //     },
  //     /* plotBands: [{
  //       from: 0,
  //       to: 120,
  //       color: '#55BF3B' // green
  //     }, {
  //       from: 120,
  //       to: 160,
  //       color: '#DDDF0D' // yellow
  //     }, {
  //       from: 160,
  //       to: 200,
  //       color: '#DF5353' // red
  //     }] */
  //   },

  //   series: [{
  //     name: 'Revenue',
  //     data: [1567551],
  //     tooltip: {
  //       valueSuffix: ' $'
  //     }
  //   }]
  // };

  public options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Sales(Last 5 Years)'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            size: 200,
            colors: ['red','yellow','green','dodgerblue','orange','gray','purple','pink'],
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    credits: {
     enabled: false
    },
    series: [{
        name: 'Sales(In millions)',
        data: [
            { name: '2021', y: 61.41 },
            { name: '2020', y: 81.41 },
            { name: '2019', y: 41.41 },
            { name: '2018', y: 31.41 },
            { name: '2017', y: 51.41 },
            { name: '2016', y: 61.41 },
        ]
    }]
};

  salesDetails: [];
  productDetails: [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Highcharts.chart('container', this.options);
    this.store.select(selectors.selectSalesDetailsSuccessState).subscribe((allDetails: any) => {
      console.log('asjkdbsahcjkcdbnpp component : allDetails : ', allDetails)
      if (allDetails?.salesDetails) {
        this.salesDetails = allDetails.salesDetails;
        this.productDetails = allDetails.productDetails;
        this.salesDetails.forEach((saleDetail: any) => {
          if (saleDetail.isChart) {
            setTimeout(() => {
              this.createChart(this.chartEl.nativeElement, this.options);
            }, 1000);
          }
        })
      }
    })
  }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }

}
