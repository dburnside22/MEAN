import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student = new FormGroup({
    name: new FormControl(''),
    isBrave: new FormControl(false),
    isAhole: new FormControl(false),
    isSmart: new FormControl(false),
    justHere: new FormControl(false),
  });

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.studentService.postStudent(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        });
  }

}
