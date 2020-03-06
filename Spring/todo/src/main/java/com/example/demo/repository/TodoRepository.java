package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo,Long>{
	
	Optional<List<Todo>> findAllByUsername(String username);
	
}
