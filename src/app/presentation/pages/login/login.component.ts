import {Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.loadForm()
  }
  loadForm(){
    this.formLogin = new FormGroup({
      identifiant: new  FormControl('',Validators.required),
      password: new  FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

}
