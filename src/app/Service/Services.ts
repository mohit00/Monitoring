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
import { Subject, Observer } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {SuccessDialogComponentComponent} from '../success-dialog-component/success-dialog-component.component';
@Injectable({
  providedIn: 'root'
})
export class  Service {
  checksite = new EventEmitter<any>();
  bsModalRef: BsModalRef;
   public loading = false;
  private missionAnnouncedSource = new Subject<string>();
 
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   firstHeaders: any;
   BASE_URL = 'http:///vapt.myxenius.com:8080/'
 NOTES_ADD = 'webapi/v1/notes';
 NOTES_UPDATE = 'webapi/v1/updateNotes';
 NOTES_GET = 'webapi/v1/getNotes';
 NOTES_GET_BY_ID = 'webapi/v1/getNotesById';
 NOTES_GET_BY_DATE = 'webapi/v1/getNotesByDate';
 SITES_COUNT = 'webapi/v1/getSiteView';
STATUS_LIST_NOTES = 'webapi/v1/getStatus';
STATUS_LIST_GRAPH_COUNT =  'webapi/v1/getSiteData';
SITES_LIST_FROM_BOX = 'webapi/v1/getSiteDetails';
SITE_DETAIL = 'webapi/v1/getSiteDataDetails ';
GETGRAPHDATA = 'webapi/v1/getGraphData'
TABVIEW_DATA = 'webapi/v1/getSiteTabView'
// tslint:disable-next-line: variable-name
data: any;
dataChange: Observable<any>;
  dataChangeObserver: any;
  constructor(private _http: HttpClient, private router: Router, private modalService: BsModalService
// tslint:disable-next-line: no-shadowed-variable
     ) {
      this.dataChange = new Observable((observer:Observer<any> ) =>{
         this.dataChangeObserver = observer;
      } );
// tslint:disable-next-line: deprecation
      this.firstHeaders = new Headers();
      this.firstHeaders.append('Content-Type', 'application/json');
  }
   setData(data:any) {
    this.data = data;
    this.dataChangeObserver.next(this.data);
  }
  get getData(){
    return this.data;
  }
  setLoginDetail(data: any) {
    sessionStorage.setItem('user', JSON.stringify(data));
}
get getLoginDetail() {
    return     JSON.parse(sessionStorage.getItem('user'));
}
  suceesAlertDialog(data ) {
    const initialState = {
      title: data,
    };
    this.bsModalRef = this.modalService.show(SuccessDialogComponentComponent, {initialState, class: 'modal-confirm  modal-sm' }    );
    }
       AddNotes(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.NOTES_ADD  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       updateNote(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.NOTES_UPDATE  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getTabView(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.TABVIEW_DATA  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getNote(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.NOTES_GET  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       setSiteReport(data) {
        sessionStorage.setItem("report",JSON.stringify(data));
        this.router.navigate(['Report']);
       }
    get   getSiteReport() {
       return JSON.parse(sessionStorage.getItem("report"));
       }
       getSiteListFromBox(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.SITES_LIST_FROM_BOX  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getSiteDetaiil(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.SITE_DETAIL  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getSiteGraphData(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.STATUS_LIST_GRAPH_COUNT  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getNoteByDate(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.NOTES_GET_BY_DATE  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getSitesCount(): Observable<any> {
        const data = {
          token_id: this.getLoginDetail.resources[0].token_id,
        };
        return this._http.post( this.BASE_URL + this.SITES_COUNT, data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getStatusNotes(dataStatus): Observable<any> {
        const data = {
          token_id: this.getLoginDetail.resources[0].token_id,
          status: dataStatus.status,
          log_time: dataStatus.log_time
        };

        return this._http.post( this.BASE_URL + this.STATUS_LIST_NOTES, data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       getGraphData(data): Observable<any> {
        return this._http.post( this.BASE_URL + this.GETGRAPHDATA  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       private handleError(error: Response) {
        console.log(error);
        this.loading = false;

        return Observable.throw(error);
      }
}
