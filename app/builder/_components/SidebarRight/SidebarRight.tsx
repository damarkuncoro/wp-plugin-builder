"use client";

import { useState } from "react";
import { Tabs } from "./Tabs";
import { Panels } from "./Panels";

export type SidebarTab = "styles" | "properties";

export function SidebarRight() {
  const [selectedTab, setSelectedTab] = useState<SidebarTab>("properties");

  return (
    <aside className="flex flex-col h-full border-l border-gray-300 dark:border-zinc-700">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Panels selectedTab={selectedTab} />
    </aside>
  );
}
export default SidebarRight;