"use client";

import { useSidebarStore } from "@/store/useSidebarStore";

export default function TopbarCenter() {
    const toggleComponentPanel = useSidebarStore((s) => s.toggleComponentPanel);

    return (
        <div>
            <button
                type="button"
                className="
          px-3 py-1.5 rounded bg-violet-600 text-white text-sm font-medium
          hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300
          transition-colors
        "
                onClick={toggleComponentPanel}
            >
                + Add Component
            </button>
        </div>
    );
}
