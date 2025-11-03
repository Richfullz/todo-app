import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
