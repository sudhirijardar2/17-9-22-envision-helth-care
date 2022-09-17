import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WorkSeekerService {
  apiUrl = 'http://54.39.218.37/api/Account/Signup'
  url = 'http://54.39.218.37/findwork_api'
  
  constructor(private http:HttpClient) { }

  postdata(data:any, apiUrl?: any){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'ARCtutorials45454@&&',

    });
    const bodyData = data;
    console.log(bodyData);
    console.log(apiUrl);
    console.log(this.url+apiUrl);
    return this.http.post(this.url+apiUrl, bodyData,  {headers: httpHeaders});
  }
}
