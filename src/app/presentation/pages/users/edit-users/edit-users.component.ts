import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent implements OnInit{
  formUser!: FormGroup

  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
    this.loadForm()
  }
  loadForm(){
    this.formUser = new FormGroup({
      pseudo: new FormControl('',[Validators.required, Validators.minLength(8)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      newPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    })
  }
  annuler() {
    this.router.navigate(['/users']);
  }
  validateForm(): boolean {
    if (this.formUser.value.password !== this.formUser.value.confirm_password) {
      return false;
    }
    return true;
  }

}
