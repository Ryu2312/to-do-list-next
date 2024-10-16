import ProtectedRoute from "../components/ProtectedRoute";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <ProtectedRoute>
        <h1 className="text-4xl font-bold">Lista de Tareas</h1>
        <TaskForm />
        <TaskList />
      </ProtectedRoute>
    </div>
  );
}
