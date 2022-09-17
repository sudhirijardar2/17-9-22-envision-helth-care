import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  onSubmit(loginform: any) {
    throw new Error('Method not implemented.');
  }
  url = "http://54.39.218.37/FindWork_API/api/Account/Signup";
  loginapiurl : string = "http://54.39.218.37/FindWork_API/api/Account/Login/";
  constructor(private http:HttpClient) { }
  
  users()
  {
    return this.http.get(this.url);
  }
  saveUsers(data:any)
  { 
    return this.http.post(this.url,data);
  }
  login(data:any)
  {
    return this.http.post(this.loginapiurl,data);
  }
}
