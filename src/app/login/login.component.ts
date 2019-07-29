import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../Service/authService';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:any;
  constructor(private service:AuthService,private route:Router) { 
    this.model ={}
  }
 
    Login() {
      alert(JSON.stringify(this.model));
      this.service.Login(this.model).subscribe(res => {
        alert(JSON.stringify(res));
  
        this.service.setLoginDetail(res);
        this.route.navigate(['Dashboard']);
  
  
  
      });
    
  }
  ngOnInit() {
  }

}
