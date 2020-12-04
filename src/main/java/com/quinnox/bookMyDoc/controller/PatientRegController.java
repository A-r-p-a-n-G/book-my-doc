package com.quinnox.bookMyDoc.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.bookMyDoc.dto.PatientRegDto;
import com.quinnox.bookMyDoc.entity.PatientReg;
import com.quinnox.bookMyDoc.service.PatientRegService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/PatientRegController")
public class PatientRegController {
	
	@Autowired
	private PatientRegService service;

	@PostMapping(path = "/insert")
	public DocResponse insert(@RequestBody PatientReg entity) {
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
	public DocResponse update(@RequestBody PatientRegDto dto) {
		System.out.println(dto);
		DocResponse rs = new DocResponse();
		rs.setMessage("Product Updated Successfully");
		PatientReg reg = service.find(dto.getPatient_id());
		BeanUtils.copyProperties(dto, rs);
		service.save(reg);
		return rs;
	}

	@PostMapping(path = "/delete")
	public DocResponse delete(@RequestBody PatientReg reg) {
		System.out.println(reg);
		DocResponse rs = new DocResponse();
		rs.setMessage("Deleted Successfully");
		service.deleteById(reg.getPatient_id());
		return rs;

	}

	@PutMapping(path = "/login")
	public DocResponse login(@RequestBody PatientReg entity) {
		DocResponse rs = new DocResponse();
		PatientReg reg = service.findByEmailAndPassword(entity.getPatient_mail(), entity.getPatient_password());
		if (reg != null) {
			rs.setData(service.findByEmailAndPassword(entity.getPatient_mail(), entity.getPatient_password()));
			return rs;
		} else {
			return null;

		}
	}
}
