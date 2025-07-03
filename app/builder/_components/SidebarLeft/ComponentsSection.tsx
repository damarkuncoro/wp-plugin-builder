import { useSidebarStore } from '@/store/useSidebarStore';
import React from 'react'

function ComponentsSection() {
    const showComponentPanel = useSidebarStore((s) => s.showComponentPanel);
    return (
        <div className="absolute inset-0 z-10 bg-white dark:bg-zinc-900 p-4 overflow-auto flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Tambah Komponen</h2>
                <button
                    onClick={() => useSidebarStore.getState().closeComponentPanel()}
                    className="text-sm px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded"
                >
                    Tutup
                </button>
            </div>

            <ul className="space-y-2">
                <li className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded">Button</li>
                <li className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded">Text</li>
                <li className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded">Image</li>
            </ul>
        </div>
    )
}

export default ComponentsSection

