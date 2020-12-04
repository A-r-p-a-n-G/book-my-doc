import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent implements OnInit {
  regForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      doc_mail: this.fb.control('', [Validators.required]),
      doc_password: this.fb.control('', [Validators.required])
    });
  }

  navigateRegister() {
    this.router.navigate([`doc-register`], {
    });
  }

  loginDataToService(regForm) {
    this.service.loginDataToAPI(regForm).subscribe((data) => {
      console.log(regForm);
      if (data!=null) {
        localStorage.setItem("user","123456");
        this.router.navigate([`doc-dashboard/${data['data'].doc_id}`]);
      }
      else {
        alert("Please Enter Correct Email ID / Password");
      }
      console.log(data['data'].doc_id);
    });
  }
}