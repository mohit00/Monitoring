import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReportComponentComponent } from './report-component/report-component.component';
import { NoteComponentComponent } from './note-component/note-component.component';
import { HeaderComponent } from './header/header.component'; // for FullCalendar!
import { QuillModule } from 'ngx-quill'
import {  ModalModule , AlertModule, TabsModule  } from 'ngx-bootstrap';
import { NoteModelComponent } from './note-model/note-model.component';
import { LoginComponent } from './login/login.component';
import { SuccessDialogComponentComponent } from './success-dialog-component/success-dialog-component.component';

import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReportDialogComponent } from './report-component/report-dialog/report-dialog.component';
import { LoaderInterceptor } from './interceptor/loaderinterceptopr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponentComponent,
    NoteComponentComponent,
    HeaderComponent,
    NoteModelComponent,
    LoginComponent,
    SuccessDialogComponentComponent,
    ReportDialogComponent
  ],
  entryComponents:[NoteModelComponent,SuccessDialogComponentComponent,ReportDialogComponent],
  imports: [FormsModule,HttpClientModule,NgSelectModule,Ng2SearchPipeModule,
    BrowserModule,QuillModule.forRoot(),ModalModule.forRoot(), AlertModule.forRoot(),TabsModule.forRoot(),
    AppRoutingModule,ChartsModule,FullCalendarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  
  providers: [DatePipe, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
