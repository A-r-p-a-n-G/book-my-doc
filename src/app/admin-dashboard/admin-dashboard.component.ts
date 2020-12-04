import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
doctors;
  constructor(private router: Router, private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
   
  }

  navigateManageDoc() {
    this.router.navigate([`admin-managedoc`], {
    });
  }

  navigateManagePatient() {
    this.router.navigate([`admin-managepatient`], {
    });
  }

  navigateManageAppointment() {
    this.router.navigate([`admin-manageappointment`], {
    });
  }

  getAllProduct() {
    this.service.getDataFromAPI().subscribe((response) => {
      this.doctors = response["data"];
    });
  }

  
}
