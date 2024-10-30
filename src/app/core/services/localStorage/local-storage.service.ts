import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private accestoken = 'token';

  constructor() { }

  getToken() {
    return localStorage.getItem(this.accestoken);
  }
  saveToken(token: string) {
    localStorage.setItem(this.accestoken, JSON.stringify(token));
  }

  destroyToken() {
    localStorage.removeItem(this.accestoken);
  }
}
