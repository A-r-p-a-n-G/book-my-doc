import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-managepatient',
  templateUrl: './admin-managepatient.component.html',
  styleUrls: ['./admin-managepatient.component.css']
})
export class AdminManagepatientComponent implements OnInit {
patients;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.service.getDataFromAPI2().subscribe((response) => {
      console.log(response);
      
      this.patients = response['data'];
    });
  }

  navigate1(patient_id, patient_name, patient_mail, patient_age, patient_gender) {
    this.patients = {
      patient_id: patient_id,
      patient_name: patient_name,
      patient_mail: patient_mail,
      patient_age: patient_age,
      patient_gender: patient_gender
    };
    console.log("hello");
    this.service.deleteDataFromAPI2(this.patients).subscribe((response) => {
      console.log(response);
      
      // for (let index = 0; index < this.doctors.length; index++) {
      //   if (this.doctors[index].doc_id == doc_id) {
      //     this.doctors.splice(index,1);
      //   }
        
      // }
      window.location.reload();
      alert("Patients data Deleted Successfully");
    }

    );
  }
}
