import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpURL: string = "http://localhost:8080";
 httpURL1= "http://localhost:8080/DocRegController/delete";
 httpURL2= "http://localhost:8080/AppointmentRegController/delete"
constructor(private httpClient: HttpClient) { }


//insert doctor data
addDataToAPI(regForm) {
  console.log("service");
  console.log(regForm);
  let dbname = "/DocRegController/insert";
  return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
}

//insert patient data
addDataToAPI2(regForm) {
  console.log("service");
  console.log(regForm);
  let dbname = "/PatientRegController/insert";
  return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
}

//insert appointment data
addDataToAPI3(regForm) {
  console.log(regForm.patient_id+" "+"service");
  let dbname = "/AppointmentRegController/insert";
  return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
}

//inserting & Retrieving Doc_id appointment data
addDataToAPI4(regForm) {
  let dbname = "/AppointmentRegController/getid";
  return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
}

//inserting & Retrieving patient_id appointment data
addDataToAPI5(regForm) {
  let dbname = "/AppointmentRegController/getpatientid";
  return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
}

//retrieve doc data
getDataFromAPI():Observable<any> {
  let dbname = "/DocRegController/get";
  return this.httpClient.get(`${this.httpURL}` + dbname);
}

//retrieve patient data
getDataFromAPI2():Observable<any> {
  let dbname = "/PatientRegController/get";
  return this.httpClient.get(`${this.httpURL}` + dbname);
}

//retrieve appointment data
getDataFromAPI3():Observable<any> {
  let dbname = "/AppointmentRegController/get";
  return this.httpClient.get(`${this.httpURL}` + dbname);
}

loginDataToAPI(regForm){
  let dbname = "/DocRegController/login";
  return this.httpClient.put(`${this.httpURL}` + dbname, regForm);
}

loginDataToAPI2(regForm){
  let dbname = "/PatientRegController/login";
  return this.httpClient.put(`${this.httpURL}` + dbname, regForm);
}

deleteDataFromAPI(id) {
  let dbname = "/DocRegController/delete";
  return this.httpClient.delete(`${this.httpURL1}/${id}`);
}

deleteDataFromAPI2(patients) {
  let dbname = "/PatientRegController/delete";
  return this.httpClient.post(`${this.httpURL}` + dbname, patients);
}

//delete appointment
deleteDataFromAPI3(id) {
  // let dbname = "/AppointmentRegController/delete";
  return this.httpClient.delete(`${this.httpURL2}/${id}`);
}
}

// deleteDoctor(id:number):Observable<any>{
//   return this.http.delete(`${this.baseUrl1}/${id}`)
// }