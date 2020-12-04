package com.quinnox.bookMyDoc.dto;

public class PatientRegDto {

	 private Integer patient_id;
		
		
		
		private String patient_name;
		
		
		
		private String patient_mail;
		
		
		
		private String patient_password;

		
		
		private Integer patient_age;
		
		
	    private String patient_gender;
	    
	     
	    private String patient_address;


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


		public String getPatient_mail() {
			return patient_mail;
		}


		public void setPatient_mail(String patient_mail) {
			this.patient_mail = patient_mail;
		}


		public String getPatient_password() {
			return patient_password;
		}


		public void setPatient_password(String patient_password) {
			this.patient_password = patient_password;
		}


		public Integer getPatient_age() {
			return patient_age;
		}


		public void setPatient_age(Integer patient_age) {
			this.patient_age = patient_age;
		}


		public String getPatient_gender() {
			return patient_gender;
		}


		public void setPatient_gender(String patient_gender) {
			this.patient_gender = patient_gender;
		}


		public String getPatient_address() {
			return patient_address;
		}


		public void setPatient_address(String patient_address) {
			this.patient_address = patient_address;
		}


		@Override
		public String toString() {
			return "PatientRegDto [patient_id=" + patient_id + ", patient_name=" + patient_name + ", patient_mail="
					+ patient_mail + ", patient_password=" + patient_password + ", patient_age=" + patient_age
					+ ", patient_gender=" + patient_gender + ", patient_address=" + patient_address + "]";
		}

		
		
}
