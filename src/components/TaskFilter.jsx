import React from "react";

function TaskFilter({ filter, setFilter, search, setSearch }) {
    return (
        <div className="task-filter-card">
            <h2 className="task-filter-title">Filtrar tareas 🔍</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar tarea..."
                className="search-input"
            />
            <div className="filter-buttons">
                <button
                    className={`filter-btn filter-btn-all ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    Todas
                </button>
                <button
                    className={`filter-btn filter-btn-pending ${filter === "active" ? "active" : ""}`}
                    onClick={() => setFilter("active")}
                >
                    Pendientes
                </button>
                <button
                    className={`filter-btn filter-btn-completed ${filter === "completed" ? "active" : ""}`}
                    onClick={() => setFilter("completed")}
                >
                    Completadas
                </button>
            </div>

        </div>
    );
}

export default TaskFilter;
