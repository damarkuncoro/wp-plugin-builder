"use client";

import {
  LucideSettings,
  LucideEye,
  LucideCode,
  LucideLayers,
  LucideMove,
  LucideSave,
  LucideShare2
} from "lucide-react";

export default function TopbarRight() {
  return (
    <div className="flex items-center space-x-2">
      <IconButton icon={<LucideMove size={18} />} tooltip="Move" />
      <IconButton icon={<LucideLayers size={18} />} tooltip="Layers" />
      <IconButton icon={<LucideEye size={18} />} tooltip="Preview" />
      <IconButton icon={<LucideCode size={18} />} tooltip="Code" />
      <IconButton icon={<LucideSettings size={18} />} tooltip="Settings" />
      <IconButton icon={<LucideSave size={18} />} tooltip="Save" />
      <IconButton icon={<LucideShare2 size={18} />} tooltip="Share" />
    </div>
  );
}

function IconButton({
  icon,
  tooltip
}: {
  icon: React.ReactNode;
  tooltip: string;
}) {
  return (
    <button
      type="button"
      className="
        relative p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300
        transition-colors group
      "
    >
      {icon}
      <span
        className="
          absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0
          group-hover:opacity-100 transition-opacity pointer-events-none
        "
      >
        {tooltip}
      </span>
    </button>
  );
}
