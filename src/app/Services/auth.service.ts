import { Injectable } from '@angular/core';

interface data{
  email:string
  pass:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Input:data={
    email:'admin@gmail.com',
    pass:'1234'

  }

  constructor() { }
  isLoggedin=false

  login(){
    this.isLoggedin=true
    return this.Input
  }
  logout(){
    this.isLoggedin=false
  }
  isauthenticated(){
    const promise = new Promise<boolean>((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.isLoggedin)
      },500)
    })
    return promise
  }
}
