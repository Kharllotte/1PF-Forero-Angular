import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() students: Student[] = [];

  constructor(){  }

  formStudent = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    isActive: new FormControl()
  });
 

 onSubmit(){
  const student = new Student(
    this.students.length,
    this.formStudent.value.firstname,
    this.formStudent.value.lastname,
    this.formStudent.value.isActive
  );
  this.students.push(student)
  localStorage.setItem('students', JSON.stringify(this.students))

  
 }

 
}