import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{
  formReport!: FormGroup;
  type = [
    {name: 'Élèves'},
    {name: 'Professeurs'},
    {name: 'Utilisateurs'},
  ]
  ngOnInit(): void {
    this.loadForm()
  }
  loadForm(){
    this.formReport = new FormGroup({
      type: new FormControl('',Validators.required),
    });
  }
  generateExcel() {
    console.log(this.formReport.value);
    };
  generatePDF() {
    console.log(this.formReport.value);

  }

}
