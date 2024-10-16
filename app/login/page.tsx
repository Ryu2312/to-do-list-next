"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    router.push("/");
  };

  return (
    <main className="container mx-auto w-full h-svh p-8">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border rounded mt-2"
          placeholder="Usuario"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border rounded mt-2"
          placeholder="Contraseña"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded mt-4"
        >
          Ingresar
        </button>
      </form>
    </main>
  );
}
