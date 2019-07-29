import { Component, OnInit } from '@angular/core';
import { Router , Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { Service } from '../Service/Services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
header: any;
 showSelect = false;
 start: any = 0;
 end: any = 50;
repeatFunction = true;
siteLists: any ;
 getSiteList() {
if (this.repeatFunction) {
  this.repeatFunction = false;
  const dataJson = this.Service.getSiteReport;
  dataJson.fromLimit = this.start;
  dataJson.toLimit = this.end;
  this.Service.getSiteListFromBox(dataJson).subscribe(res => {
   this.siteLists = res.resources;
});
}
  }
  selected:any;
  onOptionsSelected(ev){
 this.Service.checksite.emit(this.selected)
  }
   constructor(private Router: Router, private Service: Service) {

    this.header = [{
      path: '/Dashboard',
      name: 'Dashboard',
      icon: 'icon-dashboard'
    }, {
      path: '/Report',
      name: 'Report',
      icon: 'icon-list-alt'
    }, {
      path: '/Note',
      name: 'Notes',
      icon: 'icon-facetime-video'
    }];
    if (Router.url === '/Report') {
this.showSelect = true;
this.getSiteList();
     }
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        if (Router.url === '/Report') {
           this.showSelect = true;
           this.getSiteList();
               }else {
                this.showSelect = false;
               }
      }
      if (event instanceof NavigationError) {
      }
  });
  }
  ngOnInit() {
  }
}