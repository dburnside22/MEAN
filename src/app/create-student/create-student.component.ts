import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student = new FormGroup({
    name: new FormControl(''),
    isBrave: new FormControl(''),
    isAhole: new FormControl(''),
    isSmart: new FormControl(''),
    justHere: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
