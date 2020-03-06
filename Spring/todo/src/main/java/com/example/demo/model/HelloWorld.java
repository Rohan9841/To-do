package com.example.demo.model;

import lombok.Data;

@Data
public class HelloWorld {

	String message;
	
	public HelloWorld(String message) {
		this.message = message;
	}
}
