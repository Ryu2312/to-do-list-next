import ProtectedRoute from "../components/ProtectedRoute";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">Lista de Tareas</h1>
        <TaskForm />
        <TaskList />
      </main>
    </ProtectedRoute>
  );
}
