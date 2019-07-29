import { Component, OnInit } from '@angular/core';
import { Service } from '../Service/Services';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions } from 'chart.js';
import {ReportDialogComponent} from '../report-component/report-dialog/report-dialog.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.scss']
})
export class ReportComponentComponent implements OnInit {
  public pieChartOptions1: ChartOptions;
  bsModalRef: BsModalRef;

  public pieChartLabels1: Label[];
  public pieChartData1: number[] ;

  public pieChartLabels2: Label[];
  public pieChartData2: number[] ;
  public pieChartOptions2: ChartOptions;

  public pieChartLabels3: Label[];
  public pieChartData3: number[] ;
  public pieChartOptions3: ChartOptions;

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors1: any = [];
  public pieChartColors2: any = [];
  public pieChartColors3: any = [];


//    [
//      {
//       backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
//      },
//  ];

SiteDetail: any;
idselected: any;
  constructor(private Service: Service, private modalService: BsModalService) {

    this.Service.checksite.subscribe(res => {
      this.idselected = res;
      const dataJson  = {
        token_id: this.Service.getLoginDetail.resources[0].token_id,
        id: res,
      };
      this.Service.getSiteDetaiil(dataJson).subscribe(res => {
        console.log(JSON.stringify(res));
        this.SiteDetail = res.resources[0];


        this.chartSet(  this.SiteDetail);
        this.chartSet2(  this.SiteDetail);

        this.chartSet3(  this.SiteDetail);

      });
    });
  }
 chartSet(data) {
   this.pieChartColors1 = [
    {
             backgroundColor: ['#b2ffb2', '#f58f8f', '#86c7f3', '#b2b2ff', '#e80808'],
            },
   ];
   this.pieChartData1 = [data.healthyDL, data.faultyDL, data.maintDL, data.connectedDL, data.disconnectDL];
   this.pieChartLabels1 = ['Healthy', 'Faulty', 'Maintainance', 'Connected', 'Disconnected'];
   this.pieChartOptions1 = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = '';
          return label;
        },
      },
    }
  };
 }
 chartSet2(data) {
  this.pieChartColors2 = [
    {
             backgroundColor: ['#f58f8f', '#86c7f3', '#b2ffb2', '#e80808'],
            },
   ];
  this.pieChartData2 = [data.faultyDIC, data.maintDIC, data.healthyDics, data.unhealthyDics];
  this.pieChartLabels2 = ['Faulty', 'Maintainance', 'Healthy', 'Un Healthy'];
  this.pieChartOptions2 = {
   responsive: true,
   legend: {
     position: 'top',
   },
   plugins: {
     datalabels: {
       formatter: (value, ctx) => {
         const label = '';
         return label;
       },
     },
   }
 };
 }
 chartSet3(data) {
  this.pieChartColors3 = [
    {
             backgroundColor: ['#b2ffb2', '#e80808', '#86c7f3', '#b2b2ff', '#f58f8f'],
            },
   ];
  this.pieChartData3 = [data.healthySensors, data.unhealthySensors, data.locationLowBal, data.zeroReadSensors, data.faultySensors];
  this.pieChartLabels3 = ['Healthy', 'Un Healthy', 'Low Balance', 'Zero Reading', 'Faulty Sensor'];
  this.pieChartOptions3 = {
   responsive: true,
   legend: {
     position: 'top',
   },
   plugins: {
     datalabels: {
       formatter: (value, ctx) => {
         const label = '';
         return label;
       },
     },
   }
 };
 }

 getGraphData(type, status) {
   const dataJson = {
    token_id: this.Service.getLoginDetail.resources[0].token_id,
    type,
    status,
    id: this.idselected,
   };
   alert(JSON.stringify(dataJson));
   this.Service.getGraphData(dataJson).subscribe(res => {
     alert(JSON.stringify(res));
     const initialState = {
      type,
      status,
      data: res.resources,
      siteName: this.SiteDetail.siteName

    };
     this.bsModalRef = this.modalService.show(ReportDialogComponent,  {initialState, class: 'gray modal-lg' });

     this.bsModalRef.content.onClose.subscribe(result => {

   });
   });
 }
  ngOnInit() {
  }
  public chartClicked1(e: any): void {
    if (e.active.length > 0) {
    const chart = e.active[0]._chart;
    const activePoints = chart.getElementAtEvent(e.event);
    if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        // console.log(clickedElementIndex, label, value)
        console.log(label);
        const type = 'DL';

        if (label === 'Faulty') {
          this.getGraphData(type, 'Faulty');
        } else if (label === 'Healthy') {
          this.getGraphData(type, 'healthy');
        }
        else if (label === 'Maintainance') {
          this.getGraphData(type, 'Maint');
        } else if (label === 'Connected') {
          this.getGraphData(type, 'Connected');
        }
      }
     }
    }




    public chartClicked2(e: any): void {
      if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
          // get the internal index of slice in pie chart
          const clickedElementIndex = activePoints[0]._index;
          const label = chart.data.labels[clickedElementIndex];
          // get value by index
          const value = chart.data.datasets[0].data[clickedElementIndex];
          // console.log(clickedElementIndex, label, value)
          console.log(label);
          const type = 'DIC';

          if (label === 'Faulty') {
            this.getGraphData(type, 'Faulty');
          } else if (label === 'Healthy') {
            this.getGraphData(type, 'healthy');
          }
          else if (label === 'Maintainance') {
            this.getGraphData(type, 'Maint');
          } else if (label === 'Un Healthy') {
            this.getGraphData(type, 'unhealthy');
          }
        }
       }
      }
      public chartClicked3(e: any): void {
        if (e.active.length > 0) {
        const chart = e.active[0]._chart;
        const activePoints = chart.getElementAtEvent(e.event);
        if ( activePoints.length > 0) {
            // get the internal index of slice in pie chart
            const clickedElementIndex = activePoints[0]._index;
            const label = chart.data.labels[clickedElementIndex];
            // get value by index
            const value = chart.data.datasets[0].data[clickedElementIndex];
            // console.log(clickedElementIndex, label, value)
            console.log(label);
            const type = 'Meter';

            if (label === 'Faulty Sensor') {
              this.getGraphData(type, 'Faulty');
            } else if (label === 'Healthy') {
              this.getGraphData(type, 'healthy');
            } else if (label === 'Maintainance') {
              this.getGraphData(type, 'Maint');
            } else if (label === 'Un Healthy') {
              this.getGraphData(type, 'unhealthy');
            } else if (label === 'Low Balance') {
              this.getGraphData(type, 'LowBalance');
            } else if (label === 'Zero Reading') {
              this.getGraphData(type, 'ZeroReading');
            }
          }
         }
        }




}
