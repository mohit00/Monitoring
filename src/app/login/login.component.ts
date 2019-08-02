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
      
      this.service.Login(this.model).subscribe(res => {
     
   if(res.rc == 0){
     if(this.model.check){
       this.service.setRememberMe('true');
     }
    this.service.setLoginDetail(res);
    this.route.navigate(['Dashboard']);

  }
  
  
  
      });
    
  }
  ngOnInit() {
  }

}
