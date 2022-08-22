import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../interface/studentsinterface';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
student:Student={
  name:'',
  balance:0,
  hasBalance:true
}
  constructor(private StudentsService:StudentsService, private router:Router) { }

  ngOnInit(): void {
  }
  OnAdd(){
    this.StudentsService.addStudent(this.student)
    this.student={
      name:'',
      balance:0,
      hasBalance:true
    }
    this.router.navigate(['student'])
  }

}
