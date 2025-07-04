"use client";
import React from "react";
import { PagesSection } from "./PagesSection";
import { LayersSection } from "./LayersSection";
import { useSidebarStore } from "@/store/useSidebarStore";
import { ComponentsSection } from "./ComponentsSection";

export default function SidebarLeft() {
  const showComponentPanel = useSidebarStore((s) => s.showComponentPanel);

  return (
    <aside
      className="relative flex flex-col flex-shrink-0 h-full border-r border-gray-300 dark:border-zinc-700 transition-all bg-white dark:bg-zinc-900"
      style={{ width: "260px", minWidth: "200px", maxWidth: "400px" }}
    >
      {!showComponentPanel && (
        <>
          <PagesSection />
          <LayersSection />
        </>
      )}

      {showComponentPanel && (
        <ComponentsSection />
      )}

      <div className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-violet-500 hover:bg-violet-600"></div>
    </aside>
  );
}
