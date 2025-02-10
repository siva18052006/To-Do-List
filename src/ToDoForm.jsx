import React, { useState } from 'react';

export const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);  // Add the task to the TodoWrapper state
      setValue('');    // Reset the input field
    }
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Todo_input"
        placeholder="What is the Task Today"
        value={value}
        onChange={handleChange}
      />
      <button className="Todo_button" type="submit">
        Add Task
      </button>
    </form>
  );
};
