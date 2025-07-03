type FancyHeroRendererProps = {
  text?: string;
};
export interface RendererMap {
  // existing renderer keys
  'fancy-hero'?: typeof import('@/components/renderers/FancyHeroRenderer').default;
}

export default function FancyHeroRenderer({ text }: FancyHeroRendererProps) {
  return (
    <section className="p-8 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">{text || "Fancy Hero"}</h1>
    </section>
  );
}
