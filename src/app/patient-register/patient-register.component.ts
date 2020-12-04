import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      patient_name: this.fb.control('', [Validators.required]),
      patient_mail: this.fb.control('', [Validators.required]),
      patient_password: this.fb.control('', [Validators.required]),
      patient_age: this.fb.control('', [Validators.required]),
      patient_gender: this.fb.control('', [Validators.required]),
      patient_address: this.fb.control('', [Validators.required])
    });
  }

  addDataToService(regForm) {
    this.service.addDataToAPI2(regForm).subscribe((data) => {
      console.log(regForm);
      alert("Registered Successfully");


    });
  }
}
