import { Injectable } from '@angular/core';
import { Student } from '../interface/studentsinterface';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  fee: number = 100000;
  constructor() {}
  students: Student[] = [
    {
      name: 'John Doe',
      balance: 130000,
      hasBalance: true,
      amountPaid: 700,
    },
    {
      name: 'Jane Doe',
      balance: 0,
      hasBalance: false,
      amountPaid: 10000,
    },
    {
      name: 'Jacky',
      balance: 100,
      hasBalance: true,
      amountPaid: 8000,
    },
    {
      name: 'Mary',
      balance: 0,
      hasBalance: false,
      amountPaid: 8000,
    },
  ];

  getStudent() {
    return this.students;
  }
  getBalance(amount: number) {
    console.log(this.fee - amount);

    return Math.abs(this.fee - amount);
  }

  addStudent(newStudent: Student) {
    return this.students.push(newStudent);
  }
}
