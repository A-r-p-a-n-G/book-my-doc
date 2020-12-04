package com.quinnox.bookMyDoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.bookMyDoc.entity.DocReg;

@Repository
public interface DocRegDao extends JpaRepository<DocReg, Integer>{

	@Query("select d from DocReg d where d.doc_mail=?1 and d.doc_password=?2")
	public DocReg findByEmailAndPassword(String email,String password);
	
	@Query("select a from DocReg a where a.doc_id=?1")
	public DocReg find(Integer doc_id);
}
