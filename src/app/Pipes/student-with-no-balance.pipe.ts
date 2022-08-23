import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interface/studentsinterface';

@Pipe({
  name: 'studentWithNoBalance'
})
export class StudentWithNoBalancePipe implements PipeTransform {

  transform(value: Student[], totalfee: number): Student[] {
    return value.filter(function(data:Student){
      return data.balance>=totalfee
    })
  }

}
