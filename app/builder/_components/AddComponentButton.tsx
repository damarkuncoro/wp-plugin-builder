// _components/AddComponentButton.tsx
"use client";
import { useBuilderStore } from '@/store/useBuilderStore';

import type { ComponentBlock, ComponentType } from '@/store/useBuilderStore';

export function AddComponentButton({ type, label }: { type: ComponentBlock | ComponentType; label: string }) {
  const addComponent = useBuilderStore(state => state.addComponent);

  return (
    <button
      className="w-full bg-blue-500 text-white py-2 rounded mb-2"
      onClick={() => addComponent(type)}
    >
      {label}
    </button>
  );
}
