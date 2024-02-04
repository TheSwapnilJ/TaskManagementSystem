// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8099/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async task => {
    try {
      const response = await axios.post('http://localhost:8099/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async id => {
    try {
      await axios.delete(`http://localhost:8099/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <TaskList tasks={tasks} onDelete={deleteTask} />
          </Route>
          <Route path="/task/:id">
            <TaskDetails />
          </Route>
          <Route path="/add">
            <TaskForm onSubmit={addTask} />
          </Route>
          <Route path="/edit/:id">
            <TaskForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
