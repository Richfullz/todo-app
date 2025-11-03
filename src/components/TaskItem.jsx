import React, { useState } from "react";

function TaskItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEditSubmit = () => {
        if (editedText.trim() === "") return;
        onEditTask(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <li
            id={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
            />

            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={handleEditSubmit}
                    onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
                    autoFocus
                    className="edit-input"
                />
            ) : (
                <span onClick={() => setIsEditing(true)} className="task-text">
                    {task.text}
                </span>
            )}

            <span className="task-date">
                Creada: {task.createdAt}{" "}
                {task.updatedAt !== task.createdAt && `| Editada: ${task.updatedAt}`}
            </span>

            <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
                🗑️
            </button>
        </li>
    );
}

export default TaskItem;
