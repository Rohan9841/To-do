package com.example.demo.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TodoController {

	@Autowired
	TodoService todoService;
	
	@PostMapping(value = "/writeTodos")
	public void writeTodos() {
		todoService.save(new Todo("Rohan","Learn Guitar", new Date(), false));
		todoService.save(new Todo("Rohan","Read algorithm2", new Date(), true));
		todoService.save(new Todo("Rohan","Learn dance", new Date(), false));
	}
	
	@GetMapping(value = "user/{username}/getAllTodos")
	public List<Todo> getAllTodos(@PathVariable("username") String username){
		
		List<Todo> todos = todoService.findAllByUsername(username);
		
		return todos;
	}
	
	@DeleteMapping(value = "todos/delete/{todo_id}")
	public void deleteTodo(@PathVariable("todo_id") long id) {
		todoService.delete(todoService.findById(id));
	}
}
