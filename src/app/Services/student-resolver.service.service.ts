import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../interface/studentsinterface';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root',
})
export class StudentResolverServiceService implements Resolve<Student[]> {
  constructor(private studentsService: StudentsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Student[] | Observable<Student[]> | Promise<Student[]> {
    return this.studentsService.getStudent();
  }
}
