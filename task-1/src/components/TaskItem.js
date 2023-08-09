import * as PropTypes from "prop-types";
import React from "react";

function TaskItem({task, onComplete, onDelete}) {
  return (
    <li>
        <span className={`cursor-pointer ${task.completed ? "completed" : ""}`}
              onClick={() => onComplete(task.id)}>{task.text}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func
};
export default TaskItem