import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Student } from 'src/app/models/student.model';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
student: Student | null = null
flag: boolean = true;
studentId: number | null = null;
@Input() students: Student[] = [];

@Input() 
set editStudent(value: Student | null){
  console.log(value)
  if (value){
    this.flag = false;
    this.studentId=value.id
    this.formStudent.controls['firstname'].setValue(value.firstname);
    this.formStudent.controls['lastname'].setValue(value.lastname);
    this.formStudent.controls['isActive'].setValue(value.isActive);
  }
}

 constructor() {}

  formStudent = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    isActive: new FormControl()
  });

 onSubmit(){
  let idAux = 0
  if (this.students.length-1 >= 0){
    idAux = this.students[this.students.length-1].id + 1
  }
  
  const student = new Student(
    this.studentId ? this.studentId : idAux,
    this.formStudent.value.firstname,
    this.formStudent.value.lastname,
    this.formStudent.value.isActive
  );
  if (this.flag){
    this.students.push(student)
  localStorage.setItem('students', JSON.stringify(this.students))
  }else{
    const newStudent: Student[] = [...this.students]
    const indexStudent = this.students.findIndex(x => x.id === this.studentId);
    newStudent[indexStudent] = student
    localStorage.setItem('students', JSON.stringify(newStudent))
  }
  window.location.reload()
  
 }
}