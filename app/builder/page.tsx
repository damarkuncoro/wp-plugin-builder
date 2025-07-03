"use client";

import { useEffect } from 'react';
import Sidebar from './_components/Sidebar';
import Canvas from './_components/Canvas/Canvas';
import Editor from './_components/Editor';

import { useBuilderStore } from '@/store/useBuilderStore';
import { registerCustomRenderers } from '@/lib/registry';
import { fetchMarketplaceRenderers } from '@/lib/fetchMarketplaceRenderers';
import type { RendererMap } from '@/types';

export default function BuilderPage() {
  const loadComponents = useBuilderStore((state) => state.loadComponents);

  useEffect(() => {
    // Load custom renderers from marketplace (async)
    const loadRenderers = async () => {
      try {
        const customRenderers: Partial<RendererMap> = await fetchMarketplaceRenderers();
        registerCustomRenderers(customRenderers, { overwrite: false });
      } catch (error) {
        console.error("[BuilderPage] Failed to load marketplace renderers:", error);
      }
    };

    loadRenderers();
  }, []);

  useEffect(() => {
  const stored = localStorage.getItem('selectedComponents');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        loadComponents(parsed);
      }
    } catch (e) {
      console.error('Invalid JSON in localStorage', e);
    }
    localStorage.removeItem('selectedComponents');
  }
}, [loadComponents]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Canvas />
        <Editor />
      </main>
    </div>
  );
}
