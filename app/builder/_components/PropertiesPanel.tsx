"use client";
export default function PropertiesPanel() {
  return (
    <aside className="w-72 bg-white border-l overflow-y-auto p-4">
      <h2 className="text-lg font-bold mb-4">Properties</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Text</label>
          <input type="text" className="border p-2 w-full rounded" placeholder="Component text" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Color</label>
          <input type="color" className="border p-2 w-full rounded" />
        </div>
      </div>
    </aside>
  );
}
