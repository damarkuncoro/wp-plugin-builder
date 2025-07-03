"use client";

import { ComponentBlock } from "@/types";
import { useBuilderStore } from "@/store/useBuilderStore";

export default function ComponentCard({ comp }: { comp: ComponentBlock }) {
  const updateComponent = useBuilderStore((state) => state.updateComponent);
  const removeComponent = useBuilderStore((state) => state.removeComponent);

  return (
    <div
      className="
        relative group bg-white border border-gray-200 rounded-xl shadow-sm 
        p-6 hover:shadow-md transition
      "
    >
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={() => removeComponent(comp.id)}
          className="text-gray-400 hover:text-red-500 text-xl"
          title="Delete"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-xs uppercase text-gray-400 tracking-wide">
          {comp.type}
        </div>

        {comp.type === "header" && (
          <h2
            className="text-3xl font-bold"
            style={{ color: comp.color }}
          >
            {comp.text}
          </h2>
        )}

        {comp.type === "section" && (
          <p className="text-base" style={{ color: comp.color }}>
            {comp.text}
          </p>
        )}

        {comp.type === "image" && (
          <img
            src={comp.src}
            alt=""
            className="rounded-lg max-w-full border"
          />
        )}

        {comp.type === "button" && (
          <button
            className="
              px-4 py-2 rounded bg-blue-500 text-white font-medium
              hover:bg-blue-600 transition
            "
            style={{ backgroundColor: comp.color }}
          >
            {comp.text}
          </button>
        )}
      </div>
    </div>
  );
}
