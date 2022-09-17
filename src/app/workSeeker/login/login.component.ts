import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';
import { WorkSeekerService } from 'src/app/work-seeker.service';
import {Router} from "@angular/router"
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  
  public loginForm: any;

  constructor(private formBuilder:FormBuilder , private workers:WorkSeekerService, private api : UsersDataService, private router: Router) {
    this.myForm();
   }
  
   myForm(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      password:['',Validators.required]
    })
  }
  ngOnInit(): void {}

  visible: boolean = true;
  changeType: boolean = true;

  viewPass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  onSubmit() 
  {
    this.workers.postdata(this.loginForm.value).subscribe((result)=>{
      // console.log("result",result);
    })
 
    // this.router.navigate(['/home']);
    // this.checkoutForm.reset();  
   this.api.onSubmit(this.loginForm)  
  }
}  