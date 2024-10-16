import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white dark:bg-gray-900 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-sans font-semibold ">
          {" "}
          Welcome Next Proyect
        </h1>
        <ToggleThemeButton />
      </div>
    </header>
  );
}
