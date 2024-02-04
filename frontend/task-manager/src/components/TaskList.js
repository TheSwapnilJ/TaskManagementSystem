// TaskList.js
import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}{' '}
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <Link to={`/task/${task.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
