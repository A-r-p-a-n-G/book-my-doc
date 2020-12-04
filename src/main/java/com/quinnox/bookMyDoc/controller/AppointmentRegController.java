package com.quinnox.bookMyDoc.controller;

import java.util.List;

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

import com.quinnox.bookMyDoc.dto.AppointmentRegDto;
import com.quinnox.bookMyDoc.entity.AppointmentReg;
import com.quinnox.bookMyDoc.entity.DocReg;
import com.quinnox.bookMyDoc.service.AppointmentRegService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/AppointmentRegController")
public class AppointmentRegController {

	@Autowired
	private AppointmentRegService service;


	@PostMapping(path = "/insert")
	public DocResponse insert(@RequestBody AppointmentReg entity) {
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

	@PostMapping(path = "/getid")
	public DocResponse retriveById(@RequestBody AppointmentReg reg) {
		DocResponse rs = new DocResponse();
		List<AppointmentReg> list = service.findById1(reg.getDoc_id());
		System.out.println(list);
		if (!list.isEmpty()) {
			rs.setMessage("Doc_id Retrieved Successfully ");
			rs.setData(list);
		} else {
			rs.setMessage(null);
			rs.setData(null);
		}
		return rs;
//		service.findById(reg.getDoc_id())
	}

	@PostMapping(path = "/getpatientid")
	public DocResponse retriveById1(@RequestBody AppointmentReg reg) {
		DocResponse rs = new DocResponse();
		List<AppointmentReg> list = service.findById2(reg.getPatient_id());
		System.out.println(list);
		if (!list.isEmpty()) {
			rs.setMessage("patient_id Retrieved Successfully ");
			rs.setData(list);
		} else {
			rs.setMessage(null);
			rs.setData(null);
		}
		return rs;
//		service.findById(reg.getDoc_id())
	}

//	@PostMapping(path = "/getid")
//	public DocResponse retriveById(@RequestBody AppointmentReg reg) {
//		DocResponse rs = new DocResponse();
//		rs.setMessage("Doc_id Retrieved Successfully ");
//		rs.setData(service.findById1(reg.getDoc_id()));
//		return rs;
////		service.findById(reg.getDoc_id())
//	}

	@PutMapping(path = "/update")
	public DocResponse update(@RequestBody AppointmentRegDto dto) {
		System.out.println(dto);
		DocResponse rs = new DocResponse();
		rs.setMessage("Product Updated Successfully");
		AppointmentReg reg = service.find(dto.getAppointment_id());
		BeanUtils.copyProperties(dto, rs);
		service.save(reg);
		return rs;
	}

	@DeleteMapping("/delete/{appointment_id}")
	public DocResponse delete(@PathVariable Integer appointment_id) {
//		System.out.println(reg);
		DocResponse rs = new DocResponse();
		rs.setMessage("Deleted Successfully");
		service.deleteById(appointment_id);
		return rs;

	}

	@PutMapping(path = "/login")
	public DocResponse login(@RequestBody DocReg entity) {
		DocResponse rs = new DocResponse();
		AppointmentReg reg = service.findByEmailAndPassword(entity.getDoc_mail(), entity.getDoc_password());
		if (reg != null) {
			rs.setData(service.findByEmailAndPassword(entity.getDoc_mail(), entity.getDoc_password()));
			return rs;
		} else {
			return null;

		}
	}

}


