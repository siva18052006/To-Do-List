// TodoWrapper.jsx
import React, { useState } from 'react';
import { TodoForm } from './ToDoForm';
import { Todo } from './ToDo';

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const editTask = (oldTask, newTask) => {
    setTasks(tasks.map((task) => (task === oldTask ? newTask : task)));
  };

  return (
    <div className="TodoWrapper">
      <h1>My Todo List</h1>
      <TodoForm addTask={addTask} /> {/* Passing addTask to TodoForm */}
      <ul className="TodoList">
        {tasks.map((task, index) => (
          <li key={index}>
            <Todo 
              task={task} 
              onRemove={removeTask} 
              onEdit={(newTask) => editTask(task, newTask)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
