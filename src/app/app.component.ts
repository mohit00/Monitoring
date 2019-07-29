import { Component } from '@angular/core';
import { Router , Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader:boolean = true;
  constructor(private Router: Router) {
    Router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {

    }

    if (event instanceof NavigationEnd) {
       if (Router.url === '/Login') {
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
