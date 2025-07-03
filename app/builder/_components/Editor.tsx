"use client";

import { useBuilderStore } from '@/store/useBuilderStore';
import ComponentEditor from './ComponentEditor';
import { ComponentBlock } from '@/types';

export default function Editor() {
  const components = useBuilderStore(state => state.components);
  const updateComponent = useBuilderStore(state => state.updateComponent);
  const removeComponent = useBuilderStore(state => state.removeComponent);

  return (
    <aside className="w-80 border-l bg-white h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Component Editor</h2>
        <p className="text-sm text-gray-500">Edit selected components below</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
        {components.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No components added yet.</p>
        ) : (
          components.map(comp => (
            <div key={comp.id} className="bg-gray-50 p-3 rounded-lg shadow-sm border">
              <ComponentEditor
                comp={comp}
                onChange={(data: Partial<ComponentBlock>) => updateComponent(comp.id, data)}
                onDelete={() => removeComponent(comp.id)}
              />
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
