package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Task;

public interface TaskService {

	public List<Task> getAllTasks();

	public Task getTaskById(Long id);

	public Task createTask(Task task);

	public Task updateTask(Long id, Task taskDetails);

	public void deleteTask(Long id);

}
