package com.quinnox.bookMyDoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoc.entity.AppointmentReg;

@Repository
public interface AppointmentRegDao extends JpaRepository<AppointmentReg, Integer>{

	@Query("select d from DocReg d where d.doc_mail=?1 and d.doc_password=?2")
	public AppointmentReg findByEmailAndPassword(String email,String password);
	
	@Query("select a from AppointmentReg a where a.doc_id=?1")
	public List<AppointmentReg> findById1(Integer doc_id);
	
	@Query("select a from AppointmentReg a where a.patient_id=?1")
	public List<AppointmentReg> findById2(Integer patient_id);
	
	@Query("select a from AppointmentReg a where a.appointment_id=?1")
	public AppointmentReg find(Integer appointment_id);
}
