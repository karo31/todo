import React, {useEffect, useRef, useState} from "react";
import TaskItem from "./TaskItem";
import {v4 as uuidv4} from 'uuid';
import "./taskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      setTasks([...tasks, {id: uuidv4(), text, completed: false}]);
      taskInputRef.current.value = '';
      taskInputRef.current.focus();
    }
  };

  const handleTaskComplete = (id) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(task => task.id === id)
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (id) => {
    const updatedTasks = tasks.filter(({id: taskId}) => taskId !== id);
    setTasks(updatedTasks);
  };

  return <div className="task-container">
    <h1>Todo List</h1>
    <input
      ref={taskInputRef}
      type="text"
      placeholder="Add a new task"
      onKeyDown={(event => {
        if (event.key === 'Enter') {
          addTask(event.target.value);
        }
      })}
    />
    <ul>
      {tasks.map((task) =>
        <TaskItem
          task={task}
          key={task.id}
          onComplete={handleTaskComplete}
          onDelete={handleTaskDelete}
        />)}
    </ul>
  </div>;
}

export default TaskList