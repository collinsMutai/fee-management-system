import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from '../interface/studentsinterface';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-shownobalance',
  templateUrl: './shownobalance.component.html',
  styleUrls: ['./shownobalance.component.css'],
})
export class ShownobalanceComponent implements OnInit {
  students!: Student[];

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}
  totalfee: number = this.studentsService.fee;
  ngOnInit(): void {
    this.route.params.subscribe((value: Params) => {
      this.students = this.studentsService.students;
    });
  }
  getBalance(x: number) {
    return this.studentsService.getBalance(x);
  }
}
