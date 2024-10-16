import ProtectedRoute from "../components/ProtectedRoute";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Filters from "@/components/Filters";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full justify-start p-10 gap-20 h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <ProtectedRoute>
        <div className="text-center">
          <h1 className="text-4xl  font-bold">Lista de Tareas</h1>
          <span>Add and filter your most important tasks</span>
          <TaskForm />
        </div>
        <div className="flex max-w-7xl w-full mx-auto gap-8">
          <Filters />
          <TaskList />
        </div>
      </ProtectedRoute>
    </div>
  );
}
