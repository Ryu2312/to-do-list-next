"use client";

import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
