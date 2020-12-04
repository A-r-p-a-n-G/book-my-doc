import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  regForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      patient_mail: this.fb.control('', [Validators.required]),
      patient_password: this.fb.control('', [Validators.required])
    });
  }
  navigateRegister() {
    this.router.navigate([`patient-register`], {
    });
  }

//   navigatePatientDashboard() {
//     this.router.navigate([`patient-dashboard`], {
//     });
// }

loginDataToService(regForm) {
  this.service.loginDataToAPI2(regForm).subscribe((data) => {
    console.log(regForm);
    if (data!=null) {
      localStorage.setItem("user","123456");
      this.router.navigate([`patient-dashboard/${data['data'].patient_id}`]);
    }
    else {
      alert("Please Enter Correct Email ID / Password");
    }
    console.log(data['data'].patient_id);
  });
}
}
