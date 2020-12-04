import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocLoginComponent } from './doc-login/doc-login.component';
import { DocRegisterComponent } from './doc-register/doc-register.component';
import { DataService } from './service/data.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManagedocComponent } from './admin-managedoc/admin-managedoc.component';
import { HomeimgComponent } from './homeimg/homeimg.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientSearchdocComponent } from './patient-searchdoc/patient-searchdoc.component';
import { DocsearchPipe } from './docsearch.pipe';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientBookappointmentComponent } from './patient-bookappointment/patient-bookappointment.component';
import { AdminManagepatientComponent } from './admin-managepatient/admin-managepatient.component';
import { AdminManageappointmentComponent } from './admin-manageappointment/admin-manageappointment.component';
import { AdminDocupdateComponent } from './admin-docupdate/admin-docupdate.component';

const routes: Routes = [
  {path:'',redirectTo:'homeimg',pathMatch:'full'},
  {path:'homeimg',component:HomeimgComponent},
  {path: 'front-page', component: FrontPageComponent},
  {path: 'doc-login', component: DocLoginComponent},
  {path: 'doc-register', component: DocRegisterComponent},
  {path: 'doc-dashboard/:id', component: DoctorDashboardComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-managedoc', component: AdminManagedocComponent},
  {path: 'admin-managepatient', component: AdminManagepatientComponent},
  {path: 'admin-manageappointment', component: AdminManageappointmentComponent},
  {path: 'admin-docupdate/:id', component: AdminDocupdateComponent},
  {path: 'patient-login', component: PatientLoginComponent},
  {path: 'patient-register', component: PatientRegisterComponent},
  {path: 'patient-dashboard/:id', component: PatientDashboardComponent},
  {path: 'patient-searchdoc', component: PatientSearchdocComponent},
  {path: 'patient-bookappointment/:id', component: PatientBookappointmentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    DocLoginComponent,
    DocRegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminManagedocComponent,
    HomeimgComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    PatientDashboardComponent,
    PatientSearchdocComponent,
    DocsearchPipe,
    DoctorDashboardComponent,
    PatientBookappointmentComponent,
    AdminManagepatientComponent,
    AdminManageappointmentComponent,
    AdminDocupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
