import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseService } from '../../../../core/services/baseService/base-service.service';
import { environmentDev } from '../../../../../environments/environment.dev';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  users: any[] = [];
  userNumber!: number
  constructor(private baseService: BaseService) { }
  ngOnInit(): void {
    this.loadUser()
  }
  loadUser(){
    this.baseService.getAll(`${environmentDev.api.endpoint.users.getAll}`).subscribe(
      (res) => {
        console.log(res);
        this.users = res;
        this.userNumber = this.users.length
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
