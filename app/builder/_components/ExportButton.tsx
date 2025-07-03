// _components/ExportButton.tsx
"use client";
import { useBuilderStore } from '@/store/useBuilderStore';

export function ExportButton() {
  const components = useBuilderStore(state => state.components);
  const themeName = useBuilderStore(state => state.themeName);

  const handleExport = async () => {
    const res = await fetch('/api/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ layout: components, themeName }),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${themeName}.zip`;
    link.click();
  };

  return (
    <button
      className="w-full bg-purple-600 text-white py-2 rounded mt-4"
      onClick={handleExport}
    >
      Export Theme
    </button>
  );
}
