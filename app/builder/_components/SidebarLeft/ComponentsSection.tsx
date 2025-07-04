'use client';

import { useSidebarStore } from '@/store/useSidebarStore';
import { motion } from 'framer-motion';
import React from 'react';
import { Plus, PlusIcon, X } from 'lucide-react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from '@/components/ui/button';

export function ComponentsSection() {
    const showComponentPanel = useSidebarStore((s) => s.showComponentPanel);

    if (!showComponentPanel) return null;

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 z-50 bg-white dark:bg-zinc-900 p-6 overflow-auto flex flex-col shadow-lg border-l border-zinc-200 dark:border-zinc-800"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-zinc-800 dark:text-white">🧩 Tambah Komponen</h2>
                <button
                    onClick={() => useSidebarStore.getState().closeComponentPanel()}
                    className="text-sm px-3 py-1.5 flex items-center gap-1 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white rounded-md transition"
                >
                    <X size={16} />
                    
                </button>
            </div>

            <ul className="space-y-3">
                 <aside className="w-64 bg-white border-r border-gray-200 h-screen p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Blocks</h2>
      <ScrollArea className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Button variant="outline" className="w-full justify-start">
              2 Columns
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              3 Columns
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Heading
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Text
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Input
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Button
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Video
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Image
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              Map
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-full justify-start">
              HTML
            </Button>
          </li>
        </ul>
      </ScrollArea>
      <Button className="mt-4 w-full">
        <PlusIcon className="w-4 h-4 mr-2" /> Add Custom Block
      </Button>
    </aside>
            </ul>
        </motion.div>
    );
}
