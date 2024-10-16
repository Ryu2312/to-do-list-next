"use client";

import { useState, useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-96 mx-auto mt-4"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow p-3 border rounded-lg"
        placeholder="Nueva tarea"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="flex-grow p-3 border rounded-lgtext-gray-500 dark:text-gray-400"
      />

      <button
        type="submit"
        className="p-3 bg-blue-500 dark:bg-gray-900 text-white rounded-lg"
      >
        Añadir tarea
      </button>
    </form>
  );
}
