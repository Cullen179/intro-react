import React, { useState } from 'react';

function TaskApp() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h1>Task App</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Enter a new task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;