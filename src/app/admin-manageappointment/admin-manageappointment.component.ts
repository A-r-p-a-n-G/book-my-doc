import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-manageappointment',
  templateUrl: './admin-manageappointment.component.html',
  styleUrls: ['./admin-manageappointment.component.css']
})
export class AdminManageappointmentComponent implements OnInit {

  appointments;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.service.getDataFromAPI3().subscribe((response) => {
      console.log(response);
      
      this.appointments = response['data'];
    });
  }

  navigate1(appointment_id, doc_id, doc_name, doc_speciality, patient_id, patient_name, select_date, select_time) {
    this.appointments = {
      appointment_id: appointment_id,
      doc_id: doc_id,
      doc_name: doc_name,
      doc_speciality: doc_speciality,
      patient_id: patient_id,
      patient_name: patient_name,
      select_date: select_date,
      select_time: select_time
    };

    console.log("hello");
    this.service.deleteDataFromAPI3(appointment_id).subscribe((response) => {
      console.log(response);
      
      // for (let index = 0; index < this.doctors.length; index++) {
      //   if (this.doctors[index].doc_id == doc_id) {
      //     this.doctors.splice(index,1);
      //   }
        
      // }
      window.location.reload();
      alert("Appointment data Deleted Successfully");
    }

    );
  }


}
