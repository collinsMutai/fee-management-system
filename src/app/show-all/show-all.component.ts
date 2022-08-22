import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from '../interface/studentsinterface';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent implements OnInit {
  students!: Student[];
  name = '';
  balance = 0;
  hasBalance = true;
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value: Params) => {
      this.students = this.studentsService.getStudent();
    });
  }
}
