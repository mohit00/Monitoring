import { Component } from '@angular/core';
import { Router , Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
 import {AuthService} from '../app/Service/authService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader:boolean = true;
  loaderShow:boolean = false;
  getBackgroud(){
    if (this.Router.url === '/Login') {
    return 'bacgroud' 
    }else{
      return 'bacgroud2';
    }
  }
  constructor(private Router: Router,private Service:AuthService) {
    this.Service.loaderCheck.subscribe(res => {
      if (res === 'show') {
       this.loaderShow = true;
      } else {
       this.loaderShow = false;

      }
   });
    Router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {

    }

    if (event instanceof NavigationEnd) {
       if (Router.url === '/Login') {
         if(this.Service.RemeberMe == 'true'){
           this.Router.navigate(['Dashboard']);
         }
        this.showHeader = false;
              }else{
                this.showHeader = true;
              }
    }

    if (event instanceof NavigationError) {

    }
});
 }
  title = 'Monitoring';

}
