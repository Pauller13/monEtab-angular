import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
  formStudent!: FormGroup;
  class = [
    {name: 'Tle'},
    {name: '1ère'},
    {name: '2nde'},
    {name: '3ème'},
    {name: '4ème'},
    {name: '5ème'},
    {name: '6ème'},
  ]
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.loadForm();

  }
  annuler() {
    this.router.navigate(['/students']);
  }
  loadForm() {
    this.formStudent = new FormGroup({
    last_name : new FormControl('',Validators.required),
    first_name : new FormControl('',Validators.required),
    birth_date : new FormControl('',Validators.required),
    register : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    phone : new FormControl('',[Validators.required, Validators.minLength(10)]),
    classroom: new FormControl('',Validators.required)
    });
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty );
  };
  saveData() {
    console.log(this.formStudent.value);
  }
}
