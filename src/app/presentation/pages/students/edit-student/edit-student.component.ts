import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})

export class EditStudentComponent implements OnInit {
  formStudent!: FormGroup;
  class = [
    {name: 'Tle'},
    {name: '1ère'},
    {name: '2nde'},
    {name: '3ème'},
    {name: '4ème'},
    {name: '5ème'},
    {name: '6ème'}
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
    last_name : new FormControl('Kouakou',Validators.required),
    first_name : new FormControl('George',Validators.required),
    birth_date : new FormControl('12/08/1992',Validators.required),
    register : new FormControl('GDJG83737',Validators.required),
    city : new FormControl('Dabou',Validators.required),
    gender : new FormControl('Homme',Validators.required),
    phone : new FormControl('0123456789',[Validators.required, Validators.minLength(10)]),
    classroom: new FormControl('2nde',Validators.required)
    });
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty );
  };
  saveData() {
    console.log(this.formStudent.value);
  }
}

