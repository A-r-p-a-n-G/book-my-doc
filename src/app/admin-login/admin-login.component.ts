import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  regForm: FormGroup;
  constructor(private router:Router, private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      admin_mail: this.fb.control('', [Validators.required]),
      admin_password: this.fb.control('', [Validators.required])
    });
  }

  navigateAdminDashboard() {
    this.router.navigate([`admin-dashboard`], {
    });
}


}
