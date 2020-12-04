package com.quinnox.bookMyDoc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.bookMyDoc.dao.AppointmentRegDao;
import com.quinnox.bookMyDoc.entity.AppointmentReg;


@Service
public class AppointmentRegServiceImpl implements AppointmentRegService{

	@Autowired
	AppointmentRegDao dao;

	@Override
	public AppointmentReg save(AppointmentReg reg) {
		return dao.save(reg);
	}

	@Override
	public List<AppointmentReg> findAll() {
		return dao.findAll();
	}

	@Override
	public boolean deleteById(Integer appointment_id) {
		dao.deleteById(appointment_id);
		return true;
	}

	@Override
	public AppointmentReg findByEmailAndPassword(String doc_mail, String doc_password) {
		return dao.findByEmailAndPassword(doc_mail, doc_password);
	}

	@Override
	public List<AppointmentReg> findById1(Integer doc_id) {
		return dao.findById1(doc_id);
	}
	
	@Override
	public List<AppointmentReg> findById2(Integer patient_id) {
		return dao.findById2(patient_id);
	}

	@Override
	public AppointmentReg find(Integer appointment_id) {
		return dao.find(appointment_id);
	}
	
	
	
}
