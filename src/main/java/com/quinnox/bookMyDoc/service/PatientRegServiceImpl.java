package com.quinnox.bookMyDoc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.bookMyDoc.dao.PatientRegDao;
import com.quinnox.bookMyDoc.entity.PatientReg;

@Service
public class PatientRegServiceImpl implements PatientRegService {

	@Autowired
	PatientRegDao dao;
	
	@Override
	public PatientReg save(PatientReg reg) {
		return dao.save(reg);
	}

	@Override
	public List<PatientReg> findAll() {
		return dao.findAll();
	}

	@Override
	public boolean deleteById(Integer patient_id) {
		dao.deleteById(patient_id);
		return true;
	}

	@Override
	public PatientReg findByEmailAndPassword(String patient_mail, String patient_password) {
		return dao.findByEmailAndPassword(patient_mail, patient_password);
	}
	
	
	@Override
	public PatientReg find(Integer patient_id) {
		return dao.find(patient_id);
	}

}
