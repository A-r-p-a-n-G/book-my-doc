import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doc_id: any;
  doctors: any;
  regForm: any;
  id;
  details;
  doc_name;
  appointments: any = [];
  message;

  constructor(private activated: ActivatedRoute, private fb: FormBuilder, private service: DataService) {

    activated.params.subscribe((data) => {
      this.id = data;
      console.log(this.id.id);
      //  console.log(data);
    });
  }

  ngOnInit() {
  }

  viewappointment(id) {
    this.details = {
      doc_id: id,
    }
    this.service.addDataToAPI4(this.details).subscribe((response) => {
      // this.appointments=response['data'];
      //       console.log(this.appointments);

      console.log(response['data']);

      if (response['data'] != null) {
        this.appointments = response['data'];

      } else {
        this.details=null;
        this.message = "You have No New appointments!";
        console.log(response);
      }
    }
    );
  }

}
