package com.quinnox.bookMyDoc.dto;

public class DocRegDto {

    private Integer doc_id;
	
	
	
	private String doc_name;
	
	
	
	private String doc_mail;
	
	
	
	private String doc_password;

	
	
	private String doc_speciality;
	
	
    private String doc_location;


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


	public String getDoc_mail() {
		return doc_mail;
	}


	public void setDoc_mail(String doc_mail) {
		this.doc_mail = doc_mail;
	}


	public String getDoc_password() {
		return doc_password;
	}


	public void setDoc_password(String doc_password) {
		this.doc_password = doc_password;
	}


	public String getDoc_speciality() {
		return doc_speciality;
	}


	public void setDoc_speciality(String doc_speciality) {
		this.doc_speciality = doc_speciality;
	}


	public String getDoc_location() {
		return doc_location;
	}


	public void setDoc_location(String doc_location) {
		this.doc_location = doc_location;
	}


	@Override
	public String toString() {
		return "DocRegDto [doc_id=" + doc_id + ", doc_name=" + doc_name + ", doc_mail=" + doc_mail + ", doc_password="
				+ doc_password + ", doc_speciality=" + doc_speciality + ", doc_location=" + doc_location + "]";
	}
    

}
