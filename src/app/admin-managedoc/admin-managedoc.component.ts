import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-managedoc',
  templateUrl: './admin-managedoc.component.html',
  styleUrls: ['./admin-managedoc.component.css']
})
export class AdminManagedocComponent implements OnInit {
  doctors;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.service.getDataFromAPI().subscribe((response) => {
      console.log(response);
      
      this.doctors = response['data'];
    });
  }

  navigate1(doc_id, doc_name, doc_mail, doc_speciality, doc_location) {
    this.doctors = {
      doc_id: doc_id,
      doc_name: doc_name,
      doc_mail: doc_mail,
      doc_speciality: doc_speciality,
      doc_location: doc_location
    };
    console.log("hello");
    this.service.deleteDataFromAPI(doc_id).subscribe((response) => {
      console.log(response);
      
      // for (let index = 0; index < this.doctors.length; index++) {
      //   if (this.doctors[index].doc_id == doc_id) {
      //     this.doctors.splice(index,1);
      //   }
        
      // }
      window.location.reload();
      alert("Doctor's data Deleted Successfully");
    });
  }


  
  navigate(doc_id, doc_name, doc_mail, doc_speciality, doc_location) {

    this.router.navigate([`admin-docupdate/${doc_id}`], {
      queryParams: {
        doc_name: doc_name,
        doc_mail: doc_mail,
        doc_speciality: doc_speciality,
        doc_location: doc_location
      }
    });
}

}