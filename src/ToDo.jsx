// Todo.jsx
import React, { useState } from 'react';
import { EditTodo } from './EditToDo';

export const Todo = ({ task, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newTask) => {
    onEdit(newTask);  // Update the task in the parent component
    setIsEditing(false);  // Exit edit mode
  };

  return (
    <div className="TodoItem">
      {isEditing ? (
        <EditTodo currentTask={task} onSave={handleEdit} />
      ) : (
        <div className="TaskContent">
          <span>{task}</span>
          <button onClick={() => setIsEditing(true)} className="EditButton">
            Edit
          </button>
          <button onClick={() => onRemove(task)} className="RemoveButton">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};
