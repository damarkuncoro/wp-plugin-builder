"use client"
import { useBuilderStore } from '@/store/useBuilderStore';
import { CanvasItem } from './CanvasItem';
import ComponentCard from './ComponentCard';

export default function Canvas() {
  const components = useBuilderStore(state => state.components);

  return (

    <div className="flex-1 bg-gray-100 p-4 border-l border-gray-200">
      {components.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500">
            <p className="text-lg font-semibold">The canvas is empty.</p>
            <p>Add components from the sidebar to start building.</p>
          </div>
        </div>
      )}

      <div className="space-y-4">

        {components.map(comp => (
            <ComponentCard key={comp.id} comp={comp} />

        ))}
      </div>
    </div>
  )
}
