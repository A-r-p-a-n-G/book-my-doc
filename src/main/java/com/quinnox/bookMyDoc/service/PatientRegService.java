package com.quinnox.bookMyDoc.service;

import java.util.List;

import com.quinnox.bookMyDoc.entity.PatientReg;

public interface PatientRegService {

	public PatientReg save(PatientReg reg);

	public List<PatientReg> findAll();

	public boolean deleteById(Integer patient_id);

	public PatientReg findByEmailAndPassword(String patient_mail, String patient_password);
	
	public PatientReg find(Integer patient_id);
}
