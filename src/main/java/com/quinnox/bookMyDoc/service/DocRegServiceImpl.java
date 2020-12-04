package com.quinnox.bookMyDoc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.bookMyDoc.dao.DocRegDao;
import com.quinnox.bookMyDoc.entity.DocReg;

@Service
public class DocRegServiceImpl implements DocRegService {

	@Autowired
	DocRegDao dao;
	
	@Override
	public DocReg save(DocReg reg) {
		return dao.save(reg);
	}

	@Override
	public List<DocReg> findAll() {
		return dao.findAll();
	}

	@Override
	public boolean deleteById(Integer doc_id) {
		dao.deleteById(doc_id);
		return true;
	}

	@Override
	public DocReg findByEmailAndPassword(String doc_mail, String doc_password) {
		return dao.findByEmailAndPassword(doc_mail, doc_password);
	}

	
	@Override
	public DocReg find(Integer doc_id) {
		return dao.find(doc_id);
	}
}
