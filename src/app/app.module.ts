import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './workSeeker/signup/signup.component';
import { HomeComponent } from './workSeeker/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon';
import { InvoicesComponent } from './workSeeker/invoices/invoices.component';
import { LoginComponent } from './workSeeker/login/login.component';
import { HistoryComponent } from './workSeeker/history/history.component';
import { PaidComponent } from './workSeeker/paid/paid.component';
import { ProfileComponent } from './workSeeker/profile/profile.component';
import { AppliedWorkComponent } from './workSeeker/applied-work/applied-work.component';
import { PendingComponent } from './workSeeker/pending/pending.component';
import { WorkOrderComponent } from './workSeeker/work-order/work-order.component';
import { CreateWorkComponent } from './workProvider/create-work/create-work.component';
import { NurseProfileComponent } from './workProvider/nurse-profile/nurse-profile.component';
import { AvailabilityComponent } from './workProvider/availability/availability.component';
import { History1Component } from './workProvider/history1/history1.component';
import { Invoices1Component } from './workProvider/invoices1/invoices1.component';
import { WorkOrder1Component } from './workProvider/work-order1/work-order1.component';
import { JobPostedComponent } from './workProvider/job-posted/job-posted.component';
import { WorkOrder2Component } from './workProvider/work-order2/work-order2.component';
import { JobPosted2Component } from './workProvider/job-posted2/job-posted2.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    InvoicesComponent,
    LoginComponent,
    HistoryComponent,
    PaidComponent,
    ProfileComponent,
    AppliedWorkComponent,
    PendingComponent,
    WorkOrderComponent,
    CreateWorkComponent,
    NurseProfileComponent,
    AvailabilityComponent,
    History1Component,
    Invoices1Component,
    WorkOrder1Component,
    JobPostedComponent,
    WorkOrder2Component,
    JobPosted2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




