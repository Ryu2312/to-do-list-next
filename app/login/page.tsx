"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState(true);
  const [signUpErrors, setSignUpErrors] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(username, password);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setSignUpErrors("error");
      }
    }
  };

  function handleTabChange() {
    setActiveTab((prev) => !prev);
  }

  const hasError = signUpErrors === "error";

  return (
    <main className="container mx-auto w-full h-screen">
      <div className="flex flex-col items-center gap-3 my-auto h-full pt-20 max-w-4xl">
        <div className="px-10 py-1 bg-slate-200 rounded-lg flex gap-1 text-lg font-semibold text-gray-600">
          <button
            onClick={() => handleTabChange()}
            className={`${
              activeTab
                ? "bg-white hover:opacity-100 dark:bg-gray-800 dark:text-white"
                : ""
            } py-1.5 px-9 rounded-lg`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange()}
            className={`${
              activeTab
                ? ""
                : "bg-white hover:opacity-100 dark:bg-gray-800 dark:text-white"
            } py-1.5 px-9 rounded-lg`}
          >
            Signup
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 w-[36%]">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 border rounded-lg mb-4"
            placeholder="Probino"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border rounded-lg mb-4"
            placeholder="******"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 dark:bg-gray-900 text-white rounded-lg  w-full"
          >
            Ingresar
          </button>
        </form>
        {hasError && <p>{signUpErrors || "Invalid Credentials"}</p>}
      </div>
    </main>
  );
}
