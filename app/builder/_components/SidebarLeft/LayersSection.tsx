// components/SidebarLeft/LayersSection.tsx
"use client";
import React from "react";

export function LayersSection() {
  return (
    <section className="flex flex-col flex-1 overflow-hidden">
      <header className="flex items-center px-4 py-2 border-b border-gray-300 dark:border-zinc-700">
        <svg className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
        </svg>
        <span className="font-medium">Layers</span>
      </header>
      <div className="overflow-y-auto flex-1 text-sm select-none">
        <ul className="flex flex-col">
          <li className="flex items-center px-2 py-1 border border-transparent hover:bg-gray-50 dark:hover:bg-zinc-800">
            <svg className="w-4 h-4 mr-2 transform -rotate-90 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7,10L12,15L17,10H7Z" />
            </svg>
            <svg className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z" />
            </svg>
            <span className="truncate flex-1">Body</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
