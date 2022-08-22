import { Injectable } from '@angular/core';
import { Student } from '../interface/studentsinterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  students:Student[]=[
    {
      name: 'John Doe',
      balance:300,
      hasBalance:true
    },
    {
      name: 'Jane Doe',
      balance:0,
      hasBalance:false
    },
    {
      name: 'Jacky',
      balance:100,
      hasBalance:true
    },
    {
      name: 'Mary',
      balance:0,
      hasBalance:false
    }
  ]

  getStudent(){
    return this.students
  }
  getBalance(){
    return this.students.filter(item=>item.balance>0)
  }
  getNoBalance(){
    return this.students.filter(item=>item.balance ===0)
  }
}
