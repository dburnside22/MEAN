import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any;
  // dataSource = new StudentDataSource(this.studentService);

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((res) => {
        this.students = res;
    });
  }

}

export class StudentDataSource extends DataSource<any> {
  constructor(private studentService: StudentService) {
    super();
  }

  connect() {
    return this.studentService.getStudents();
  }

  disconnect() {

  }
}
