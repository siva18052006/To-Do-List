import React, { useState } from 'react';

export const EditTodo = ({ currentTask, onSave }) => {
  const [newTask, setNewTask] = useState(currentTask);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onSave(newTask);
    }
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        className="EditTodoInput"
      />
      <button type="submit" className="SaveButton">
        Save
      </button>
    </form>
  );
};
