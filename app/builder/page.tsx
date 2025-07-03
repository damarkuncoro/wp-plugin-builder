"use client";

import Canvas from "./_components/Canvas/Canvas";
import { Topbar } from "./_components/Topbar";
import { SidebarLeft, SidebarRight } from "./_components/Sidebar";

export default function BuilderPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarLeft />
        <Canvas />
        <SidebarRight />
      </div>
    </div>
  );
}
