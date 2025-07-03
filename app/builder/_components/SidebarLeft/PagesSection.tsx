// components/SidebarLeft/PagesSection.tsx
"use client";
import React, { useState } from "react";

export function PagesSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full border-b border-gray-300 dark:border-zinc-700">
      <header className="flex items-center justify-between w-full px-4 py-2 text-left">
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1Z" />
          </svg>
          <span className="font-medium">Pages</span>
        </span>

        <span className="flex items-center gap-2">
          <button type="button" className="p-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80" aria-label="Add Page">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
        </span>
      </header>

      {isOpen && (
        <div className="overflow-auto border-t border-gray-300 dark:border-zinc-700 max-h-52">
          <ul className="flex flex-col">
            <li className="group flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
              <span className="truncate">Web</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded focus:outline-none focus:ring-2 focus:ring-violet-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5Z" />
                </svg>
              </button>
            </li>
            <li className="group flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600">
              <span className="truncate">Page 2</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded focus:outline-none focus:ring-2 focus:ring-violet-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-violet-500 hover:bg-violet-600"></div>
    </section>
  );
}
