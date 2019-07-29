import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Service} from '../Service/Services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   constructor(private service: Service, private pipe: DatePipe  ) {
    this.service.dataChange.subscribe((data) => {
      this.countListLany = data;
    });
    if(this.service.getData){
      this.countListLany = this.service.getData;

    }

  setTimeout(() => {
this.intervalFlip();
setTimeout(() => {
  this.oppFlip();
    }, 1000);
  }, 1000);
  setInterval(() => {
  this.intervalFlip();
  setTimeout(() => {
    this.oppFlip();
      }, 1000);
}, 10000);

   }
  dics: any = [];
  healthyDics: any  = [];
  unhealthyDics: any = [];
  sensors: any = [];
  healthySensors: any = [];
  unhealthySensors: any = [];
  cutSensors: any = [];
  restoreSensors: any = [];
  locationLowBal: any = [];
  shortCode: any = [];
  siteName: any = [];
   fromLimit: any = 0;
   toLimit: any = 10;
  list: any;
     title = 'app';
   tab = 1;
   singleSelect: any = [];
   multiSelect: any = [];
   stringArray: any = [];
   objectsArray: any = [];
   stringOptions = [
     'Burns Dalton', 'Mcintyre Lawson', 'Amie Franklin', 'Jocelyn Horton', 'Fischer Erickson', 'Medina Underwood', 'Goldie Barber'
   ];
   config = {
     displayKey: 'name', // if objects array passed which key to be displayed defaults to description
     search: true,
     limitTo: 3
   };
   selectedOptions = [{
     _id: '5a66d6c31d5e4e36c7711b7a',
     index: 0,
     balance: '$2,806.37',
     picture: 'http://placehold.it/32x32',
     name: 'Burns Dalton'
   },
   {
     _id: '5a66d6c3657e60c6073a2d22',
     index: 1,
     balance: '$2,984.98',
     picture: 'http://placehold.it/32x32',
     name: 'Mcintyre Lawson'
   }];
   options = [
     {
       _id: '5a66d6c31d5e4e36c7711b7a',
       index: 0,
       balance: '$2,806.37',
       picture: 'http://placehold.it/32x32',
       name: 'Burns Dalton'
     },
     {
       _id: '5a66d6c3657e60c6073a2d22',
       index: 1,
       balance: '$2,984.98',
       picture: 'http://placehold.it/32x32',
       name: 'Mcintyre Lawson'
     },
     {
       _id: '5a66d6c376be165a5a7fae33',
       index: 2,
       balance: '$2,794.16',
       picture: 'http://placehold.it/32x32',
       name: 'Amie Franklin'
     },
     {
       _id: '5a66d6c3f7854b6b4d96333b',
       index: 3,
       balance: '$2,537.14',
       picture: 'http://placehold.it/32x32',
       name: 'Jocelyn Horton'
     },
     {
       _id: '5a66d6c31f967d4f3e9d84e9',
       index: 4,
       balance: '$2,141.42',
       picture: 'http://placehold.it/32x32',
       name: 'Fischer Erickson'
     },
     {
       _id: '5a66d6c34cfa8cddefb31602',
       index: 5,
       balance: '$1,398.60',
       picture: 'http://placehold.it/32x32',
       name: 'Medina Underwood'
     },
     {
       _id: '5a66d6c3d727c450794226de',
       index: 6,
       balance: '$3,915.65',
       picture: 'http://placehold.it/32x32',
       name: 'Goldie Barber'
     }
   ];
  calendarPlugins = [dayGridPlugin]; // important!
   public lineChartData: any;




  public lineChartLabels: Label[] = this.shortCode;
  // tslint:disable-next-line: member-ordering
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  NotesList: any;
countListLany: any = {};
noticeBoard: any;
  flipcarf: any = '';
  flipcarf1: any = '';
  flipcarf2: any = '';
  flipcarf3: any = '';
  flipcarf4: any = '';
  flipcarf5: any = '';
  getSiteList(type, status) {

    const dataJson = {
      type,
      status,
      token_id: this.service.getLoginDetail.resources[0].token_id
    };
    // "fromLimit":"0",
      // "toLimit":"50",
    this.service.setSiteReport(dataJson);
  }
   getSiteGraphData() {
    
     const dataJson = {
      token_id: this.service.getLoginDetail.resources[0].token_id,
      fromLimit: this.fromLimit,
      toLimit: this.toLimit
     };
      
     this.service.getSiteGraphData(dataJson).subscribe(res => {
      console.log(JSON.stringify(res))

      // this.dics = [];
      // this.healthyDics  = [];
      // this.unhealthyDics   = [];
      // this.sensors  = [];
      // this.healthySensors = [];
      // this.unhealthySensors = [];
      // this.cutSensors = [];
      // this.restoreSensors  = [];
      // this.locationLowBal = [];
      // this.shortCode  = [];
      // this.siteName  = [];
      this.getNoticeByDate();

      this.getNoticeBoardData();
        for (let i  = 0 ; i < res.resources.length ; i++) {
         this.dics.push(parseInt(res.resources[i].dics));
         this.healthyDics.push(parseInt(res.resources[i].healthyDics));
         this.unhealthyDics.push(parseInt(res.resources[i].unhealthyDics));
         this.sensors.push(parseInt(res.resources[i].sensors));
         this.healthySensors.push(parseInt(res.resources[i].healthySensors));
         this.unhealthySensors.push(parseInt(res.resources[i].unhealthySensors));
         this.cutSensors.push(parseInt(res.resources[i].cutSensors));
         this.restoreSensors.push(parseInt(res.resources[i].restoreSensors));
         this.locationLowBal.push(parseInt(res.resources[i].locationLowBal));
         this.shortCode.push((res.resources[i].shortCode));
         this.siteName.push((res.resources[i].siteName));

        }
       console.log(JSON.stringify(this.dics));
       console.log(JSON.stringify(this.healthyDics));
       console.log(JSON.stringify(this.unhealthyDics));
       console.log(JSON.stringify(this.sensors));
       console.log(JSON.stringify(this.healthySensors));
       console.log(JSON.stringify(this.unhealthySensors));
       console.log(JSON.stringify(this.cutSensors));
       console.log(JSON.stringify(this.restoreSensors));
       console.log(JSON.stringify(this.locationLowBal));
       console.log(JSON.stringify(this.shortCode));
       console.log(JSON.stringify(this.siteName));
       this.lineChartData = [
  { data:  this.dics, label: 'dics' },
  { data: this.healthyDics, label: 'healthyDics' },
  { data: this.sensors, label: 'sensors'  },
  { data: this.healthySensors, label: 'healthySensors'  },
  { data: this.unhealthySensors, label: 'unhealthySensors'  },
  { data: this.cutSensors, label: 'cutSensors'  },
  { data: this.restoreSensors, label: 'restoreSensors'  },
  { data: this.locationLowBal, label: 'locationLowBal'  }
];
       console.log(JSON.stringify(this.lineChartData));
     });


   }


   changeValue($event: any) {
     // console.log(this.selectForm.getRawValue());
   }
getNoticeByDate() {
  const dataJson = {
    log_time: this.pipe.transform(new Date(), 'yyyy-MM-dd'),
    token_id: this.service.getLoginDetail.resources[0].token_id,
    userId: this.service.getLoginDetail.user_id
  };
  this.service.getNoteByDate(dataJson).subscribe(res => {
    console.log(JSON.stringify(res));
    this.NotesList = res.resources;
  });
}
getCount() {
  this.service.getSitesCount().subscribe(res => {
    // this.countListLany = res.resources[0];
    this.service.setData(res.resources[0])

    this.getSiteGraphData();

    });
}

getclassUser(data) {
  if (data === this.service.getLoginDetail.user_id) {
    return 'by_myself';
  } else {
    return 'from_user';

  }
}
getNoticeBoardData() {
  const dataJson = {
    status: '1',
    log_time: this.pipe.transform(new Date(), 'yyyy-MM-dd'),
  };
  this.service.getStatusNotes(dataJson).subscribe(res => {
     this.noticeBoard = res.resources;

  });
}
  ngOnInit() {
    this.getCount();
    //     this.chart.update();

  }


  // events


  // public hideOne() {
  //   const isHidden = this.chart.isDatasetHidden(1);
  //   this.chart.hideDataset(1, !isHidden);
  // }

  // public pushOne() {
  //   this.lineChartData.forEach((x, i) => {
  //     // const num = this.generateNumber(i);
  //     const data: number[] = x.data as number[];
  //     data.push(num);
  //   });
  //   this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  // }

  // public changeColor() {
  //   this.lineChartColors[2].borderColor = 'green';
  //   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  // }

  // public changeLabel() {
  //   this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  //   // this.chart.update();
  // }

  intervalFlip() {




    this.flipcarf =  'flipcardnew';
    setTimeout(() => {
      this.flipcarf1 = 'flipcardnew';
      setTimeout(() => {
        this.flipcarf2 = 'flipcardnew';
        setTimeout(() => {
          this.flipcarf3 = 'flipcardnew';
          setTimeout(() => {
            this.flipcarf4 = 'flipcardnew';
            setTimeout(() => {
              this.flipcarf5 = 'flipcardnew';

            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }
  oppFlip() {

    this.flipcarf =  'flipcardnewopp';
    setTimeout(() => {
      this.flipcarf1 = 'flipcardnewopp';
      setTimeout(() => {
        this.flipcarf2 = 'flipcardnewopp';
        setTimeout(() => {
          this.flipcarf3 = 'flipcardnewopp';
          setTimeout(() => {
            this.flipcarf4 = 'flipcardnewopp';
            setTimeout(() => {
              this.flipcarf5 = 'flipcardnewopp';

            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }
  nextGraph(){
    this.fromLimit =   this.fromLimit + 10;
    this.toLimit =  this.toLimit + 10;
    this.getSiteGraphData();
  }
}
