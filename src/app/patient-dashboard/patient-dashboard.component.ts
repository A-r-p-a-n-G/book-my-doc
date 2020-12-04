import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {  

patient_id;
id;
details;
appointments: any = [];
message;

  constructor(private activated: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: DataService) { 

    activated.params.subscribe((data) => {
      this.id = data;
      console.log(this.id.id);
      //  console.log(data);
    });
  }


  
  ngOnInit() {
  }

  navigateSearchDoc() {
    this.router.navigate([`patient-searchdoc`], {
    });
  }


  viewappointment(id) {
    this.details = {
      patient_id: id,
    }
    this.service.addDataToAPI5(this.details).subscribe((response) => {
      // this.appointments=response['data'];
            console.log(this.appointments);

      console.log(response['data']);

      if (response['data'] != null) {
        this.appointments = response['data'];

      } else {
        this.details=null;
        this.message = "You have No Booked appointments!";
        console.log(response);
      }
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