package com.example.demo.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class TaskNotFoundException extends RuntimeException {

    
	private static final long serialVersionUID = 1L;

	public TaskNotFoundException(Long id) {
        super("Could not find task with id " + id);
    }
}