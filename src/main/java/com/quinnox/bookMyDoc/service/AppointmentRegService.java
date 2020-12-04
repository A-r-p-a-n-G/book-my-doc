package com.quinnox.bookMyDoc.service;

import java.util.List;

import com.quinnox.bookMyDoc.entity.AppointmentReg;

public interface AppointmentRegService {

	
	public AppointmentReg save(AppointmentReg reg);

	public List<AppointmentReg> findAll();

	public boolean deleteById(Integer appointment_id);

	public AppointmentReg findByEmailAndPassword(String doc_mail, String doc_password);
	
	public List<AppointmentReg> findById1(Integer doc_id);
	
	public List<AppointmentReg> findById2(Integer patient_id);
	
	public AppointmentReg find(Integer appointment_id);
}
