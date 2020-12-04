package com.quinnox.bookMyDoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoc.entity.PatientReg;

@Repository
public interface PatientRegDao extends JpaRepository<PatientReg, Integer> {

	@Query("select p from PatientReg p where p.patient_mail=?1 and p.patient_password=?2")
	public PatientReg findByEmailAndPassword(String email,String password);
	
	@Query("select a from PatientReg a where a.patient_id=?1")
	public PatientReg find(Integer patient_id);
}
