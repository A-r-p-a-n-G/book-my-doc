import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient-bookappointment',
  templateUrl: './patient-bookappointment.component.html',
  styleUrls: ['./patient-bookappointment.component.css']
})
export class PatientBookappointmentComponent implements OnInit {
  doc_id: any;
  doctors: any;
  regForm: any;
  id;
  details;
  constructor(private activated: ActivatedRoute,
    private fb: FormBuilder,
    private service: DataService, private router: Router) {
      activated.params.subscribe((data) => {
        this.id = data;       
       console.log(data);
      });
      activated.queryParams.subscribe((data) => {
        this.doctors = data;
        console.log(data);
        
      });
     }

  ngOnInit() {
    this.regForm = this.fb.group({
      doc_id: this.fb.control("", [Validators.required]),
      doc_name: this.fb.control("", [Validators.required]),
      doc_speciality: this.fb.control("", [Validators.required]),
      patient_id: this.fb.control("", [Validators.required]),
      patient_name: this.fb.control("", [Validators.required]),
      select_date: this.fb.control("", [Validators.required]),
      select_time: this.fb.control("", [Validators.required])
    });
  }
  updateDataFromService(doc_id,doc_name, doc_speciality,regForm){
   
this.details={
  doc_id:doc_id,
  doc_name:doc_name,
  doc_speciality:doc_speciality,
  patient_id:regForm.patient_id,
  patient_name:regForm.patient_name,
  select_date:regForm.select_date,
  select_time:regForm.select_time
}
    this.service.addDataToAPI3(this.details).subscribe((data) => {

      // window.location.reload();
      alert("Appointment Booked Successfully");
      this.router.navigate([`patient-dashboard/${this.details.patient_id}`]);
  });
}
}
// addDataToService(regForm) {
//   this.service.addDataToAPI(regForm).subscribe((data) => {
//     console.log(regForm);
//     alert("Registered Successfully");


//   });
// }