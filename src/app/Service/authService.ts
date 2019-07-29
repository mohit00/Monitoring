import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient , HttpInterceptor} from '@angular/common/http';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {SuccessDialogComponentComponent} from '../success-dialog-component/success-dialog-component.component'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loaderCheck = new EventEmitter<any>();
  bsModalRef: BsModalRef;
   public loading = false;
  private missionAnnouncedSource = new Subject<string>();
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   firstHeaders: any;
   BASE_URL = 'http://192.168.40.131:8081/'
 LOGIN='webapi/v1/login'

// tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient, private router: Router, private modalService: BsModalService
// tslint:disable-next-line: no-shadowed-variable
     ) {
// tslint:disable-next-line: deprecation
      this.firstHeaders = new Headers();
      this.firstHeaders.append('Content-Type', 'application/json');
  }
  setLoginDetail(data){
    sessionStorage.setItem('user',JSON.stringify(data))
}
  suceesAlertDialog(data ) {
    const initialState = {
      title: data,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponentComponent, {initialState, class: 'modal-confirm  modal-sm' }    );

    } 
   
       Login(data): Observable<any> {

        return this._http.post( this.BASE_URL + this.LOGIN  ,data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       private handleError(error: Response) {
        console.log(error);
        this.loading = false;

        return Observable.throw(error);
      }
}
