import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-docupdate',
  templateUrl: './admin-docupdate.component.html',
  styleUrls: ['./admin-docupdate.component.css']
})
export class AdminDocupdateComponent implements OnInit {

  doctors: any;
  id;
  regForm: any;
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
      doc_mail: this.fb.control("", [Validators.required]),
      doc_password: this.fb.control("", [Validators.required]),
      doc_speciality: this.fb.control("", [Validators.required]),
      doc_location: this.fb.control("", [Validators.required])
    });
  }


  updateDataFromService(doc_id,regForm){
   
    this.details={
      doc_id:doc_id,
      doc_name:regForm.doc_name,
      doc_mail:regForm.doc_mail,
      doc_password:regForm.doc_password,
      doc_speciality:regForm.doc_speciality,
      doc_location:regForm.doc_location
    }
        this.service.addDataToAPI(this.details).subscribe((data) => {
    
           window.location.reload();
          alert("Data Updated Successfully");
      });
    }
}
