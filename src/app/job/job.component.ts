import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  form = this.fb.group({
    companyName: ['',{
      validators: [Validators.required, Validators.maxLength(50)],
    }],
    jobPosition: ['',{
      validators: [Validators.required, Validators.maxLength(20)],
    }],
    employeeId: ['',{
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
    }],
      email: ['',{
      validators: [Validators.required, Validators.email],
    }],
     department: ['',{
      validators: [Validators.required, Validators.maxLength(20)],
    }]
  })

  onSubmit(){
    console.log(this.form.controls.companyName.value);
    console.log(this.form.controls.jobPosition.value);
    console.log(this.form.controls.employeeId.value);
    console.log(this.form.controls.email.value);
    console.log(this.form.controls.department.value);
  }

  constructor(private fb: FormBuilder) { }

  isShown: boolean = false; 

  ngOnInit(): void {
  }

  get companyName() {
    return this.form.controls['companyName'];    
  }

  get jobPosition() {
    return this.form.controls['jobPosition'];
  }
  get employeeId(){
    return this.form.controls['employeeId'];
  }
  get email(){
    return this.form.controls['email'];
  }
  get department(){
    return this.form.controls['department'];
  }
  get valid() {
    return this.form.controls;
  }
 
    show() {
    
      this.isShown = ! this.isShown;
    }
 
}

