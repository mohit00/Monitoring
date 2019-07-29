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
      if (status === 'Faulty') {
        this.statusHeader = 'Faulty';
       } else if (status === 'healthy') {
        this.statusHeader = 'Healthy';
       } else if (status === 'Maint') {
        this.statusHeader = 'Healthy';
       } else if (status === 'Connected') {
        this.statusHeader = 'Connected';

       }

    }
    if (this.type ===  'DIC') {
      this.header = [{name: 'S No.', width: 10}, {name: 'DIC Id', width: 20}, {name: 'DIC Name', width: 25}, {name: 'Tower Name', width: 25}, {name: 'GateWay ID', width: 25}
      , {name: 'Status', width: 10}, {name: 'Date/Time', width: 10}];
      this.Key = ['', 'id', 'name', 'towerName', 'gatewayId', 'status', 'dateTime'];
      if (status === 'Faulty') {
        this.statusHeader = 'Faulty';
       } else if (status === 'healthy') {
        this.statusHeader = 'Healthy';
       } else if (status === 'Maint') {
        this.statusHeader = 'Healthy';
       } else if (status === 'Connected') {
        this.statusHeader = 'Connected';

       }
    }
    if (this.type ===  'Meter') {
       this.header = [{name: 'S No.', width: 10},
       {name: 'Sensor Id', width: 20},
        {name: 'Sensor Name', width: 25}, {name: 'Tower Name', width: 25}, {name: 'GateWay ID', width: 25}
      , {name: 'Status', width: 10}, {name: 'Date/Time', width: 10}];
       this.Key = ['', 'id', 'name', 'towerName', 'gatewayId', 'status', 'dateTime'];
       if (status === 'Faulty') {
        this.statusHeader = 'Faulty';
       } else if (status === 'healthy') {
        this.statusHeader = 'Healthy';
       } else if (status === 'Maint') {
        this.statusHeader = 'Healthy';
       } else if (status === 'ZeroReading') {
        this.statusHeader = 'Zero Reading';

       } else if (status === 'LowBalance') {
        this.statusHeader = 'Low Balance';

       }
    }
  }

}
