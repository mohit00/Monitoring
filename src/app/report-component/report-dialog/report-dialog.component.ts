import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _bsModalRef: BsModalRef) {
    this.onClose = new Subject();
   }
  public onClose: Subject<boolean>;
  siteName: any;
  search:any;
  data: any;
  status: any;
  statusHeader: any;
  type: any;
header: any = [];
Key: any = [];
  getData(data, key) {
return data[key];
  }
onCancel() {
  this._bsModalRef.hide();
}
  ngOnInit() {
    if (this.type ===  'DL') {
      this.header = [{name: 'S No.', width: 10}, {name: 'DL Id', width: 20}, {name: 'DL Name', width: 25}, {name: 'GateWay ID', width: 25}
      , {name: 'Status', width: 10}, {name: 'Date/Time', width: 10}];
      this.Key = ['', 'id', 'name', 'gatewayId', 'status', 'dateTime'];
      if (this.status === 'Faulty') {
        this.statusHeader = 'Faulty';
       } else if (this.status === 'healthy') {
        this.statusHeader = 'Healthy';
       } else if (this.status === 'Maint') {
        this.statusHeader = 'Healthy';
       } else if (this.status === 'Connected') {
        this.statusHeader = 'Connected';
       }
    }
    if (this.type ===  'DIC') {
      this.header = [{name: 'S No.', width: 10}, {name: 'DIC Id', width: 20}, {name: 'DIC Name', width: 25}, {name: 'Tower Name', width: 25}, {name: 'GateWay ID', width: 25}
      , {name: 'Status', width: 10}, {name: 'Date/Time', width: 10}];
      this.Key = ['', 'id', 'name', 'towerName', 'gatewayId', 'status', 'dateTime'];
      if (status === 'Faulty') {
        this.statusHeader = 'Faulty';
       } else if (this.status === 'healthy') {
        this.statusHeader = 'Healthy';
       } else if (this.status === 'Maint') {
        this.statusHeader = 'Healthy';
       } else if (this.status === 'Connected') {
        this.statusHeader = 'Connected';
       }else if (this.status === 'unhealthy') {
        this.statusHeader = 'Un healthy';
       }
    }
    if (this.type ===  'Meter') {
       
        if(this.status === 'unhealthy'){
          this.statusHeader = 'Un healthy';

        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location', width: 10},
         {name: 'Sensor Name', width: 10}, {name: 'DIC ID', width: 25}, {name: 'DIC PORT', width: 5}
       , {name: 'Grid Reading', width: 10}, {name: 'DG Reading', width: 5}, {name: 'State', width: 5}
       , {name: '	Admin Status', width: 5}, {name: '	Last Reading Time ', width: 20}];
        this.Key = ['', 'locationNo', 'name', 'dicId','dicPort', 'gridReading', 'dgReading', 'config','admin_status','last_updated_time'];
       }else if (this.status === 'Faulty') {
 
        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location', width: 10},
         {name: 'Sensor Name', width: 10}, {name: 'DIC ID', width: 25}, {name: 'DIC PORT', width: 5}
       , {name: 'Grid Reading', width: 10}, {name: 'DG Reading', width: 5}, {name: 'State', width: 5}
       , {name: '	Admin Status', width: 5},{name:'Balance',width:5},{name:'Cut Balance',width:6},
        {name: '	Last Reading Time ', width: 20}];
        this.Key = ['', 'locationNo', 'name', 'dicId','dicPort', 'gridReading', 'dgReading', 'config','admin_status','balance','cutBalance','last_updated_time'];
   
        this.statusHeader = 'Faulty';
       } else if (this.status === 'healthy') {
         
 
        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location', width: 10},
         {name: 'Sensor Name', width: 10}, {name: 'DIC ID', width: 25}, {name: 'DIC PORT', width: 5}
       , {name: 'Grid Reading', width: 10}, {name: 'DG Reading', width: 5}, {name: 'State', width: 5}
       , {name: '	Admin Status', width: 5},{name:'Balance',width:5},{name:'Cut Balance',width:6},
        {name: '	Last Reading Time ', width: 20}];
        this.Key = ['', 'locationNo', 'name', 'dicId','dicPort', 'gridReading', 'dgReading', 'config','admin_status','balance','cutBalance','last_updated_time'];
   
         this.statusHeader = 'Healthy';
       } else if (this.status === 'Maint') {
        this.statusHeader = 'Maintainance';
        
 
        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location', width: 10},
         {name: 'Sensor Name', width: 10}, {name: 'DIC ID', width: 25}, {name: 'DIC PORT', width: 5}
       , {name: 'Grid Reading', width: 10}, {name: 'DG Reading', width: 5}, {name: 'State', width: 5}
       , {name: '	Admin Status', width: 5},{name:'Balance',width:5},{name:'Cut Balance',width:6},
        {name: '	Last Reading Time ', width: 20}];
        this.Key = ['', 'locationNo', 'name', 'dicId','dicPort', 'gridReading', 'dgReading', 'config','admin_status','balance','cutBalance','last_updated_time'];
   
        } else if (this.status === 'zeroreading') {

        this.statusHeader = 'Zero Reading';
         				
        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location No.', width: 10},
         {name: 'Balance', width: 10}, {name: 'Alert Balance', width: 10}, {name: 'Last Reading Time', width: 5}
  ];
        this.Key = ['', 'locationNo','balance','alertBalance','lastReadingTime'];
        } else if (this.status === 'LowBalance') {
        this.statusHeader = 'Low Balance';
        this.header = [{name: 'Sr. No.', width: 5},
        {name: 'Location', width: 10},
         {name: 'Sensor Name', width: 10}, {name: 'DIC ID', width: 25}, {name: 'DIC PORT', width: 5}
       , {name: 'Grid Reading', width: 10}, {name: 'DG Reading', width: 5}, {name: 'State', width: 5}
       , {name: '	Admin Status', width: 5},{name:'Balance',width:5},{name:'Cut Balance',width:6},
        {name: '	Last Reading Time ', width: 20}];
        this.Key = ['', 'locationNo', 'name', 'dicId','dicPort', 'gridReading', 'dgReading', 'config','admin_status','balance','cutBalance','last_updated_time'];
   
       }
    }
  }

}
