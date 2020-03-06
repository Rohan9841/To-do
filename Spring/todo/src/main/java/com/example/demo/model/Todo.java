package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String username;
	private String description;
	private Date deadline;
	private boolean isCompleted;
	
	
	public Todo(String username, String description, Date targetDate, boolean isDone) {
		super();
		this.username = username;
		this.description = description;
		this.deadline = targetDate;
		this.isCompleted = isDone;
	}


	public Todo() {
		super();
	}
	
	
}
