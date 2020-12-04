package com.quinnox.bookMyDoc.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.bookMyDoc.dto.DocRegDto;
import com.quinnox.bookMyDoc.entity.DocReg;
import com.quinnox.bookMyDoc.service.DocRegService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/DocRegController")
public class DocRegController {

	@Autowired
	private DocRegService service;

	@PostMapping(path = "/insert")
	public DocResponse insert(@RequestBody DocReg entity) {
		System.out.println(entity);
		DocResponse rs = new DocResponse();
		rs.setMessage("Registered Successfully");
		service.save(entity);
		return rs;
	}

	@GetMapping(path = "/get")
	public DocResponse retrive() {
		DocResponse rs = new DocResponse();
		rs.setMessage("Retrieved Successfully");
		rs.setData(service.findAll());
		return rs;
	}

	@PutMapping(path = "/update")
	public DocResponse update(@RequestBody DocRegDto dto) {
		System.out.println(dto);
		DocResponse rs = new DocResponse();
		rs.setMessage("Product Updated Successfully");
		DocReg reg = service.find( dto.getDoc_id());
		BeanUtils.copyProperties(dto, rs);
		service.save(reg);
		return rs;
	}

	@DeleteMapping( "/delete/{doc_id}")
	public DocResponse delete(@PathVariable Integer doc_id ) {
		DocResponse rs = new DocResponse();
		rs.setMessage("Deleted Successfully");
		service.deleteById(doc_id);
		return rs;

	}

	@PutMapping(path = "/login")
	public DocResponse login(@RequestBody DocReg entity) {
		DocResponse rs = new DocResponse();
		DocReg reg = service.findByEmailAndPassword(entity.getDoc_mail(), entity.getDoc_password());
		if (reg != null) {
			rs.setData(service.findByEmailAndPassword(entity.getDoc_mail(), entity.getDoc_password()));
			return rs;
		} else {
			return null;

		}
	}
}
