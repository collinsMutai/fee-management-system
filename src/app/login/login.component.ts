import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
interface data{
  email:string
  pass:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router) { }
  inputs:data={
    email:'',
    pass:''
  }

  ngOnInit(): void {
  }
  valid=false
  onClick(){
    console.log(this.authService.login().email == this.inputs.email && this.authService.login().pass == this.inputs.pass);
    
    if(this.authService.login().email == this.inputs.email && this.authService.login().pass == this.inputs.pass){
      this.router.navigate(['student'])
      // localStorage.setItem()
    }else{
      this.valid = true
      setTimeout(() => {
        this.valid = false
      }, 1000);
    }
    
  }
}
