import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import { MessageService } from 'primeng/api';
import { BaseService } from '../../../../core/services/baseService/base-service.service';
import { environmentDev } from '../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',

})
export class AddUsersComponent implements OnInit{
  formUser!: FormGroup
  constructor(private router: Router, private messageService: MessageService, private baseService: BaseService) {}
  ngOnInit(): void {
    this.loadForm()
  }
  loadForm(){
    this.formUser = new FormGroup({
      pseudo: new FormControl('',[Validators.required, Validators.minLength(8)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    })
  }
  annuler() {
   this.router.navigate(['/users']);
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  };
  validateForm(): boolean {
    if (this.formUser.value.password !== this.formUser.value.confirm_password) {
      return false;
    }
    return true;
  }
  onSaveData() {
    if (!this.validateForm()) {
      console.log(this.formUser.value);
      const data = {
        password: this.formUser.value.password,
        pseudo: this.formUser.value.pseudo
      }
      this.baseService.post(`${environmentDev.api.endpoint.users.create}`, data).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Enregistrement effectue avec succes' });
        this.router.navigate(['/users']);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Enregistrement echoue' });
        console.log(err);
      },
    })
  }
}
}
