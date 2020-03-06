package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Todo;

public interface TodoService {

	void save(Todo todo);
	
	List<Todo> findAll();
	
	List<Todo> findAllByUsername(String username);
	
	Todo findById(Long id);
	
	void delete(Todo todo);
}
