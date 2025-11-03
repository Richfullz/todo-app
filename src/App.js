import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Cargar tareas guardadas
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Guardar tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    const now = new Date();
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: now.toLocaleString(),
      updatedAt: now.toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    // Animación con clase 'removing'
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("removing");
      setTimeout(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      }, 300); // coincide con duración de la animación
    }
  };



  // 🔍 Lógica de filtrado + búsqueda
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(search.toLowerCase());
    if (filter === "active") return !task.completed && matchesSearch;
    if (filter === "completed") return task.completed && matchesSearch;
    return matchesSearch;
  });
  const handleEditTask = (id, newText) => {
    const now = new Date();
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, text: newText, updatedAt: now.toLocaleString() } : task
    );
    setTasks(updated);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  // Orden de tareas
  const sortedTasks = [...filteredTasks].sort((a, b) => a.completed - b.completed);


  return (
    <div className="app">
      <Header />
      <div className="task-stats">
        <p className="total">Total: {totalTasks}</p>
        <p className="completadas">Completadas: {completedTasks}</p>
        <p className="pendientes">Pendientes: {pendingTasks}</p>
      </div>
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />


    </div>
  );
}

export default App;
