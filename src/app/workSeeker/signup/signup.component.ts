import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
// import { subscribeOn } from 'rxjs';
import { WorkSeekerService } from '../../work-seeker.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg = '';

  constructor(private router: Router, private workers: WorkSeekerService, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  visible: boolean = true;
  PassVisible: boolean = true;
  changeType: boolean = true;
  changeConfType: boolean = true;

  viewPass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

  viewConfPass() {
    this.PassVisible = !this.PassVisible;
    this.changeConfType = !this.changeConfType;
  }

  registerForm = this.formBuilder.group({
    name: '',
    email: '',
    category: '',
    password: '',
    cpassword: ''
  });

  onSubmit(data: any) {
    alert(121212);
    const apiUrl = "/api/Account/Signup";
    console.log(this.registerForm.value);
    let body = {
      "fullName": this.registerForm.value.name,
      "userName": this.registerForm.value.name,
      "email": this.registerForm.value.email,
      "category": this.registerForm.value.category,
      "password": this.registerForm.value.password,
      "confirmPassword": this.registerForm.value.cpassword,
    }
    this.workers.postdata(body, apiUrl).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['/'])
      }, 
      error =>{
        console.log("exception occured");
        this.msg = "bad credentials, Plese enter valid Email ID";
      }
    )

    // this.workers.postdata(body, apiUrl).subscribe((response: any) => {
    //   let resp = response;
    //   console.log(resp);
    //   console.log(typeof resp);
    //   console.log(resp);
    //   //these will not come here untill unless we get any response from API
    //   if (resp) {

    //     this.router.navigate(['/']);
    //   } else {
    //     this.router.navigate(['/signup']);
    //   }
    // })

    this.router.navigate(['/home']);
    // this.checkoutForm.reset();  
    // this.api.onSubmit(this.loginForm)  
  }
}


    
