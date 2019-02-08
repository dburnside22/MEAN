import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  id: String;
  student = new FormGroup({
    name: new FormControl(''),
    isBrave: new FormControl(false),
    isAhole: new FormControl(false),
    isSmart: new FormControl(false),
    justHere: new FormControl(false),
  });


  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id: string) {
    this.studentService.getStudent(id).subscribe(data => {
      console.log('data', data);
      this.id = data._id;
      this.student.setValue({
        name: data.name,
        isBrave: data.isBrave,
        isAhole: data.isAhole,
        isSmart: data.isSmart,
        justHere: data.justHere,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.studentService.updateStudent(<string>this.id, form)
      .subscribe(res => {
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  exspell() {
    this.studentService.deleteStudent(<string>this.id).subscribe();
  }
}
