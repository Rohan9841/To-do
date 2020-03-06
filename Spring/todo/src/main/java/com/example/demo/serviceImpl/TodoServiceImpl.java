package com.example.demo.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;
import com.example.demo.service.TodoService;

@Service(value = "TodoService")
public class TodoServiceImpl implements TodoService{

	@Autowired
	TodoRepository todoRepository;
	
	@Override
	public void save(Todo todo) {
		todoRepository.save(todo);
	}

	@Override
	public List<Todo> findAll() {
		List<Todo> todoList = todoRepository.findAll();
		
		return todoList;
		
	}

	@Override
	public List<Todo> findAllByUsername(String username) {
		Optional<List<Todo>> optTodos = todoRepository.findAllByUsername(username);
		
		if(optTodos.isPresent()) {
			return optTodos.get();
		}
		
		return null;
	}

	@Override
	public Todo findById(Long id) {
		Optional<Todo> optTodo = todoRepository.findById(id);
		
		if(optTodo.isPresent()) {
			return optTodo.get();
		}
		return null;
	}

	@Override
	public void delete(Todo todo) {
		todoRepository.delete(todo);
		
	}
	
	
	
	

}
