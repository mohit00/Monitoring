import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-success-dialog-component',
  templateUrl: './success-dialog-component.component.html',
  styleUrls: ['./success-dialog-component.component.scss']
})
export class SuccessDialogComponentComponent implements OnInit {
  title: string;
 
  public onCancel(): void {
    this._bsModalRef.hide();
}
// tslint:disable-next-line: variable-name
  constructor(private _bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
