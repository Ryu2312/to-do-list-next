import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <header className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl">Welcome</h1>
        <ToggleThemeButton />
      </div>
    </header>
  );
}
