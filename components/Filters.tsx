"use client";

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Filters() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="w-[30%] font-medium">
      <aside className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="sort_by">Sort by</label>
          <select
            id="sort_by"
            className="p-4 border border-gray-300 rounded-lg dark:text-gray-500"
          >
            <option value="due_date-asc">Due Date (old first)</option>
            <option value="due_date-desc">Due Date (new first)</option>
            <option value="alphabetical-asc">Alphabetical (a-z)</option>
            <option value="alphabetical-desc">Alphabetical (z-a)</option>
          </select>
        </div>
        <div>
          <label>Filter</label>
          <div className=" flex gap-2">
            <input type="checkbox" id="pending" value="onlyPending" />
            <label htmlFor="pending">Only pending</label>
          </div>
          <div className=" flex gap-2">
            <input type="checkbox" id="important" value="onlyImportant" />
            <label htmlFor="important">Only important</label>
          </div>
        </div>
        <button
          onClick={logout}
          className="p-3 bg-blue-500 dark:bg-gray-900 text-white rounded-lg"
        >
          Logout
        </button>
      </aside>
    </div>
  );
}
