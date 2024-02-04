package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.TaskNotFoundException;
import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;

@Service
public class TaskServiceIMPL  implements TaskService{
	
	@Autowired
	private TaskRepository taskRepository;
	
	
	@Override
	public List<Task> getAllTasks() {
		
		return taskRepository.findAll();
	}

	@Override
	public Task getTaskById(Long id) {
		
		return taskRepository.findById(id).get();
	}

	@Override
	public Task createTask(Task task) {
		
		return taskRepository.save(task);
	}

	@Override
	public Task updateTask(Long id, Task taskDetails) {
		Task task = taskRepository.findById(id)
		          .orElseThrow(() -> new TaskNotFoundException(id));

		        task.setTitle(taskDetails.getTitle());
		        task.setDescription(taskDetails.getDescription());
		        return taskRepository.save(task);
	}

	@Override
	public void deleteTask(Long id) {
	
		taskRepository.deleteById(id);
	}

}
