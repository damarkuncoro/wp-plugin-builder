import { RendererMap } from '@/types';
import { HeaderRenderer } from '@/components/renderers/HeaderRenderer';
import { SectionRenderer } from '@/components/renderers/SectionRenderer';
import { ImageRenderer } from '@/components/renderers/ImageRenderer';
import { ButtonRenderer } from '@/components/renderers/ButtonRenderer';

const builtInRegistry: RendererMap = {
  header: HeaderRenderer,
  section: SectionRenderer,
  image: ImageRenderer,
  button: ButtonRenderer,
};

let customRegistry: Partial<RendererMap> = {};

/**
 * Get combined registry
 */
export function getRegistry(): RendererMap {
  const combined = { ...builtInRegistry, ...customRegistry };
  Object.keys(combined).forEach(key => {
    if (combined[key] === undefined) {
      delete combined[key as keyof typeof combined];
    }
  });
  return combined as RendererMap;
}

/**
 * Register custom renderers from Marketplace or user
 * @param newRenderers Renderer map
 * @param options { overwrite: boolean } overwrite existing keys
 */
export function registerCustomRenderers(
  newRenderers: Partial<RendererMap>,
  options: { overwrite?: boolean } = {}
) {
  const { overwrite = false } = options;

  Object.entries(newRenderers).forEach(([key, value]) => {
    if (!value || typeof value !== 'function') {
      console.warn(`[Registry] Invalid renderer for "${key}" - must be React component.`);
      return;
    }

    if (!overwrite && customRegistry[key]) {
      console.info(`[Registry] Renderer "${key}" exists, skipping (use overwrite:true to replace).`);
      return;
    }

    customRegistry[key] = value;
  });
}
