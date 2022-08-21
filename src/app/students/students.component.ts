import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Student } from '../interface/studentsinterface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {

  students!: Student[]
    name=''
    balance= 0
    hasBalance= true
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data:Data)=>{
      this.students=data['students']
    })
    
  }
  displayStudent(){
    this.router.navigate(['student'])
  }
}
