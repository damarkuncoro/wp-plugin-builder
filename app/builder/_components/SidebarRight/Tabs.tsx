"use client";

import { SidebarTab } from "./SidebarRight";

type TabsProps = {
  selectedTab: SidebarTab;
  setSelectedTab: (tab: SidebarTab) => void;
};

export function Tabs({ selectedTab, setSelectedTab }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="flex w-full border-b border-gray-300 dark:border-zinc-700"
    >
      <button
        role="tab"
        type="button"
        aria-selected={selectedTab === "styles"}
        onClick={() => setSelectedTab("styles")}
        className={`flex-1 px-4 py-2 border-b-2 transition-colors
          focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80
          ${
            selectedTab === "styles"
              ? "border-violet-400 text-violet-800 dark:text-violet-400 bg-white dark:bg-zinc-900"
              : "border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800"
          }`}
      >
        Styles
      </button>

      <button
        role="tab"
        type="button"
        aria-selected={selectedTab === "properties"}
        onClick={() => setSelectedTab("properties")}
        className={`flex-1 px-4 py-2 border-b-2 transition-colors
          focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80
          ${
            selectedTab === "properties"
              ? "border-violet-400 text-violet-800 dark:text-violet-400 bg-white dark:bg-zinc-900"
              : "border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800"
          }`}
      >
        Properties
      </button>
    </div>
  );
}
