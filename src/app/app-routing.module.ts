import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './workSeeker/signup/signup.component';
import { HomeComponent } from './workSeeker/home/home.component';
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

const routes: Routes = [
  {
    path: "workSeeker/login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "invoices", component: InvoicesComponent
  },
  {
    path: "", component: LoginComponent
  },
  {
    path: "history", component: HistoryComponent
  },
  {
    path: "invoice/paid", component: PaidComponent
  },
  {
    path: "workseeker/profile", component: ProfileComponent
  },
  {
    path: "home/applied_work", component: AppliedWorkComponent
  },
  {
    path: "pending", component: PendingComponent
  },
  {
    path: "work_order", component: WorkOrderComponent
  },
  {
    path: "workProvider/creatework", component: CreateWorkComponent
  },
  {
    path: "workProvider/NurseProfile", component: NurseProfileComponent
  },
  { path: "workProvider/availability", component: AvailabilityComponent },
  { path: "workProvider/history", component: History1Component },
  { path: "workProvider/invoices1", component: Invoices1Component },
  { path: "workProvider/work-order1", component: WorkOrder1Component },
  { path: "workProvider/job-posted", component: JobPostedComponent },
  { path: "workProvider/work-order1/work-order2", component: WorkOrder2Component },
  {path: "workProvider/job-posted/job-posted2", component: JobPosted2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }