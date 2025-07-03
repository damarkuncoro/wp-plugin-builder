import { RendererMap } from '@/types';
import FancyHeroRenderer from '@/components/renderers/FancyHeroRenderer';

// Simulasi fetch dari Marketplace (bisa diubah ke fetch API)
export async function fetchMarketplaceRenderers(): Promise<Partial<RendererMap>> {
    return {
        'fancy-hero': FancyHeroRenderer,
    };
}
