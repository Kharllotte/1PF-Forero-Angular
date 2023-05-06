import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent {
  students: Student[] = [
    new Student(1, 'Naruto', 'Uzumaki', true),
    new Student(2, 'Sasuke', 'Uchiha', false),
    new Student(3, 'Sakura', 'Haruno', true),
    new Student(4, 'Kakashi', 'Hatake', false),
  ];

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
}
