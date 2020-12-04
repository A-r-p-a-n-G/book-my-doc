package com.quinnox.bookMyDoc.controller;

public class DocResponse {

	private String message;
	 private Object data;
	 
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
}
