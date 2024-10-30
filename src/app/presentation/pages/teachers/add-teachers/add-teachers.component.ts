import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-teachers',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-teachers.component.html',
  styleUrl: './add-teachers.component.css'
})
export class AddTeachersComponent implements OnInit{
  formTeacher!: FormGroup;
  subject_taughts = [
    {name: 'Math'},
    {name: 'Physique'},
    {name: 'EPS'},
    {name: 'Anglais'},
    {name: 'SVT'},
    {name: 'Philosophie'},
    {name: 'Français'},
  ];
  constructor(private router: Router) {}
  ngOnInit() {
    this.loadForm()
  }

  annuler() {
    this.router.navigate(['/teachers']);
   };
  loadForm(){
    this.formTeacher = new FormGroup({
    last_name : new FormControl('',Validators.required),
    first_name : new FormControl('',Validators.required),
    birth_date : new FormControl('',Validators.required),
    subject_taught : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    phone : new FormControl('',[Validators.required, Validators.minLength(10)]),
    })
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  };
  onSaveData(){
    console.log(this.formTeacher.value)
  }
}
