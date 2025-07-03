"use client"

import React from 'react';
import { useBuilderStore } from '@/store/useBuilderStore';
import { AddComponentButton } from './AddComponentButton';
import { ExportButton } from './ExportButton';
import { ComponentBlock } from '@/types';
import type { ComponentType } from '@/types';


function Sidebar() {
  const themeName = useBuilderStore(state => state.themeName);
  const setThemeName = useBuilderStore(state => state.setThemeName);
  const addComponent = useBuilderStore(state => state.addComponent);
  const components = useBuilderStore(state => state.components);
  const [marketplaceComponents, setMarketplaceComponents] = React.useState<ComponentBlock[]>([]);

  React.useEffect(() => {
    async function fetchMarketplace() {
      try {
        const res = await fetch('/api/components');   // contoh endpoint
        const data = await res.json();
        setMarketplaceComponents(data);
      } catch (error) {
        console.error('Failed to fetch marketplace components:', error);
      }
    }

    fetchMarketplace();
  }, []);



  const availableTypes: { type: ComponentType; label: string }[] = [
    { type: 'header', label: 'Add Header' },
    { type: 'section', label: 'Add Section' },
    { type: 'image', label: 'Add Image' },
    { type: 'button', label: 'Add Button' },
    // tambah lagi kalau mau
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <input
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      {availableTypes.map((item) => (
        <AddComponentButton key={item.type} type={item.type as ComponentType} label={item.label} />
      ))}
      {/* {availableTypes.map((item) => (
        <AddComponentButton key={item.type} type={item.type} label={item.label} />
      ))} */}

      {marketplaceComponents.map((comp) => (
        <AddComponentButton
          key={'id' in comp && comp.id ? comp.id : crypto.randomUUID()}
          type={comp}
          label={`Add ${'name' in comp ? comp.name : comp.type}`}
        />
      ))}


      <ExportButton />

    </aside>
  );
}

export default Sidebar;
