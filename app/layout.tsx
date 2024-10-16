import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { TaskProvider } from "../context/TaskContext";

export const metadata = {
  title: "Aplicación de Lista de Tareas",
  description: "Gestión de estado global con Context API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <TaskProvider>{children}</TaskProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
