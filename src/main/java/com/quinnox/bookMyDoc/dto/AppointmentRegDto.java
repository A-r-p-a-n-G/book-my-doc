package com.quinnox.bookMyDoc.dto;

public class AppointmentRegDto {

	
    private Integer appointment_id;
	
    
    private Integer doc_id;
	

	private String doc_name;
	
	
	private String doc_speciality;
	
	
	private Integer patient_id;
	
	
	private String patient_name;
	
	
	private String select_date;
	
	
	private String select_time;


	public Integer getAppointment_id() {
		return appointment_id;
	}


	public void setAppointment_id(Integer appointment_id) {
		this.appointment_id = appointment_id;
	}


	public Integer getDoc_id() {
		return doc_id;
	}


	public void setDoc_id(Integer doc_id) {
		this.doc_id = doc_id;
	}


	public String getDoc_name() {
		return doc_name;
	}


	public void setDoc_name(String doc_name) {
		this.doc_name = doc_name;
	}


	public String getDoc_speciality() {
		return doc_speciality;
	}


	public void setDoc_speciality(String doc_speciality) {
		this.doc_speciality = doc_speciality;
	}


	public Integer getPatient_id() {
		return patient_id;
	}


	public void setPatient_id(Integer patient_id) {
		this.patient_id = patient_id;
	}


	public String getPatient_name() {
		return patient_name;
	}


	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}


	public String getSelect_date() {
		return select_date;
	}


	public void setSelect_date(String select_date) {
		this.select_date = select_date;
	}


	public String getSelect_time() {
		return select_time;
	}


	public void setSelect_time(String select_time) {
		this.select_time = select_time;
	}


	@Override
	public String toString() {
		return "AppointmentRegDto [appointment_id=" + appointment_id + ", doc_id=" + doc_id + ", doc_name=" + doc_name
				+ ", doc_speciality=" + doc_speciality + ", patient_id=" + patient_id + ", patient_name=" + patient_name
				+ ", select_date=" + select_date + ", select_time=" + select_time + "]";
	}

	
}
