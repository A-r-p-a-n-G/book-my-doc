import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient-searchdoc',
  templateUrl: './patient-searchdoc.component.html',
  styleUrls: ['./patient-searchdoc.component.css']
})
export class PatientSearchdocComponent implements OnInit {
  doctors;
  search:string;
  constructor(private router: Router, private fb: FormBuilder, private service: DataService) { }
  
  ngOnInit() {

      this.service.getDataFromAPI().subscribe((response) => {
      console.log(response);
      
      this.doctors = response['data'];
    });
  }
  

  navigate(doc_id, doc_name, doc_speciality) {

    this.router.navigate([`patient-bookappointment/${doc_id}`], {
      queryParams: {
        doc_name: doc_name,
        doc_speciality: doc_speciality

      }
    });
}
}
