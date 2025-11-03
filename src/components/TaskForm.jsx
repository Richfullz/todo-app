import React, { useState } from "react";

function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() === "") return;
        onAddTask(taskText);
        setTaskText("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form-card">
            <h2 className="task-form-title">Añadir nueva tarea ➕</h2>
            <div className="container-taskForm">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Escribe tu tarea aquí..."
                    className="task-input"
                />
                <button type="submit" className="task-button">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
