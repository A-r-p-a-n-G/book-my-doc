package com.quinnox.bookMyDoc.service;

import java.util.List;

import com.quinnox.bookMyDoc.entity.DocReg;

public interface DocRegService {

	public DocReg save(DocReg reg);

	public List<DocReg> findAll();

	public boolean deleteById(Integer doc_id);

	public DocReg findByEmailAndPassword(String doc_mail, String doc_password);
	
	public DocReg find(Integer doc_id);
}
