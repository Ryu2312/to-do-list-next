"use client";

import { useState, useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow p-2 border rounded-l"
        placeholder="Nueva tarea"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Añadir
      </button>
    </form>
  );
}
