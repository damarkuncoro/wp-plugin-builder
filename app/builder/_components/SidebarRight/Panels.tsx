"use client";

import { SidebarTab } from "./SidebarRight";

type PanelsProps = {
  selectedTab: SidebarTab;
};

export function Panels({ selectedTab }: PanelsProps) {
  return (
    <div className="flex-1 flex flex-col">
      {selectedTab === "styles" && (
        <PanelContent message="Select a component to see its Style" />
      )}

      {selectedTab === "properties" && (
        <PanelContent message="Select a component to see its properties" />
      )}
    </div>
  );
}

function PanelContent({ message }: { message: string }) {
  return (
    <div
      role="tabpanel"
      className="flex-1 flex flex-col"
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 max-w-full">
        <div className="flex flex-col flex-wrap h-full justify-center">
          <div className="text-center text-sm text-gray-600 dark:text-gray-300">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
