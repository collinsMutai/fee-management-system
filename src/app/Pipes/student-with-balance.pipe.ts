import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interface/studentsinterface';

@Pipe({
  name: 'studentWithBalance'
})
export class StudentWithBalancePipe implements PipeTransform {

  transform(value: Student[], totalfee: number): Student[] {
    return value.filter(function (data:Student){
      return data.amountPaid<totalfee
    })
  }

}
