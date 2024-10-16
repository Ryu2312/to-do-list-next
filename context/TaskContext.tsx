"use client";

import { createContext, useState, useEffect } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
});

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // URL base de la API
  const API_URL = "https://doable-api-production.up.railway.app/tasks";

  // Cargar tareas desde la API al montar el componente
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al cargar las tareas");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      }
    };

    fetchTasks();
  }, []);

  // Guardar tareas en localStorage cada vez que cambian (opcional si quieres conservar las tareas localmente)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar una nueva tarea a la API
  const addTask = async (title: string) => {
    const newTask: Omit<Task, "id"> = {
      title,
      completed: false,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Error al agregar tarea");
      const createdTask = await response.json();
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  // Cambiar el estado de completado de una tarea
  const toggleTask = async (id: number) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;

    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Error al actualizar tarea");
      const updatedData = await response.json();

      setTasks(tasks.map((task) => (task.id === id ? updatedData : task)));
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };

  // Eliminar una tarea de la API
  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar tarea");

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
