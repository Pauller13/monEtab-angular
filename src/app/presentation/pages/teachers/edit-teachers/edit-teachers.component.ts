import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-teachers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-teachers.component.html',
  styleUrl: './edit-teachers.component.css'
})
export class EditTeachersComponent implements OnInit{
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
    last_name : new FormControl('Kouakou',Validators.required),
    first_name : new FormControl('Flora',Validators.required),
    birth_date : new FormControl('22/03/1990',Validators.required),
    subject_taught : new FormControl('Anglais',Validators.required),
    city : new FormControl('Bouaké',Validators.required),
    gender : new FormControl('Femme',Validators.required),
    phone : new FormControl('0123456789',[Validators.required, Validators.minLength(10)]),
    })
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  };
  onSaveData(){
    console.log(this.formTeacher.value)
  }
}
