import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { TaskProvider } from "../context/TaskContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

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
        <ThemeProvider>
          <Header />
          <AuthProvider>
            <TaskProvider>{children}</TaskProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
