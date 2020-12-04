import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-doc-register',
  templateUrl: './doc-register.component.html',
  styleUrls: ['./doc-register.component.css']
})
export class DocRegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      doc_name: this.fb.control('', [Validators.required]),
      doc_mail: this.fb.control('', [Validators.required]),
      doc_password: this.fb.control('', [Validators.required]),
      doc_speciality: this.fb.control('', [Validators.required]),
      doc_location: this.fb.control('', [Validators.required])
    });
  }

  addDataToService(regForm) {
    this.service.addDataToAPI(regForm).subscribe((data) => {
      console.log(regForm);
      alert("Registered Successfully");


    });
  }
}
