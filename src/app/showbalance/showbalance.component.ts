import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from '../interface/studentsinterface';
import { StudentsService } from '../Services/students.service';
@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})

export class ShowbalanceComponent implements OnInit {
  students!: Student[]
  name=''
  balance= 0
  hasBalance= true
  constructor(private route:ActivatedRoute,
    private studentsService:StudentsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((value:Params)=>{
      this.students=this.studentsService.getBalance()
    })
  }
  displayBalance(){
    this.router.navigate(['balance'])
  }


}
