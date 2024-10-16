"use client";

import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import { BadgeAlert, Trash2 } from "lucide-react";

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
        className={`px-4 bg-white  shadow rounded flex justify-between items-center ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        <div
          onClick={() => toggleTask(task.id)}
          className="cursor-pointer flex flex-col py-3"
        >
          <span className="dark:text-black">{task.title}</span>
          <span className="dark:text-black">25/25/25</span>
        </div>
        <div className="flex gap-1.5 items-center ">
          <button className="p-2 border border-gray-400 rounded-md text-gray-700">
            <BadgeAlert size={20} />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 border border-gray-400 rounded-md  text-gray-700"
          >
            <Trash2 size={19} />
          </button>
        </div>
      </li>
    </div>
  );
}
