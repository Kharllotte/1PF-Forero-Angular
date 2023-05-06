import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent {
  students: Student[] = [];
  
  getStudents(){
    this.students = JSON.parse(localStorage.getItem('students') || "[]" )
    console.log("students", this.students)
   }

  ngOnInit(): void {
    this.getStudents();
  }

  displayedColumns = [
    'id',
    'firstname',
    'lastname',
    'isActive',
    'edit',
    'delete',
  ];

  insertData(){
    localStorage.setItem("users", JSON.stringify(this.students));
  }

  deleteStudent(item:Student){
    this.students = this.students.filter(function(i) { return i.id !== item.id });
    console.log(item.id)
  }

  addStudent(){
  }

  getMensaje(e: any){
    console.log(e);
  }
}
