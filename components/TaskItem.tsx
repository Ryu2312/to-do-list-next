"use client";

import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskItem({ task }: { task: Task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div className="dark:bg-gray-800">
      <li
        className={`p-4 bg-white  shadow rounded flex justify-between items-center ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
          {task.title}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </li>
    </div>
  );
}
