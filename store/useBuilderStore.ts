import { ComponentType, ComponentBlock } from '@/types';
export type { ComponentType, ComponentBlock };
import { create } from 'zustand';


interface BuilderStore {
  themeName: string;
  setThemeName: (name: string) => void;

  components: ComponentBlock[];
  addComponent: (typeOrFull: ComponentType | ComponentBlock) => void;
  updateComponent: (id: number, data: Partial<ComponentBlock>) => void;
  removeComponent: (id: number) => void;
  clearComponents: () => void;
  loadComponents: (comps: Partial<ComponentBlock>[]) => void;
  appendComponents: (comps: Partial<ComponentBlock>[]) => void;
  replaceComponents: (comps: Partial<ComponentBlock>[]) => void;

  selectedComponentId: number | null;
  setSelectedComponentId: (id: number | null) => void;
}


export const useBuilderStore = create<BuilderStore>((set, get) => {
  const getNextId = () => {
    const comps = get().components;
    return comps.length ? comps[comps.length - 1].id + 1 : 1;
  };

  // const isValidComponent = (c: any): c is ComponentBlock => c && typeof c.type === 'string' && typeof c.id === 'number';
  const isValidComponent = (c: any): c is Omit<ComponentBlock, 'id'> =>
    c && typeof c.type === 'string';

  // const ensureUniqueIds = (components: any[]): ComponentBlock[] =>
  //   components
  //     .filter(isValidComponent)
  //     .map((c) => ({ ...c, id: uuidv4() }));


  const ensureUniqueIds = (components: Partial<ComponentBlock>[]): ComponentBlock[] => {
    let nextId = getNextId();
    return components
      .filter(isValidComponent)
      .map((c) => ({ ...c, id: nextId++ } as ComponentBlock));
  };


  return {
    themeName: 'MyCustomTheme',
    setThemeName: (name) => set({ themeName: name }),

    components: [],
    selectedComponentId: null,
    setSelectedComponentId: (id) => set({ selectedComponentId: id }),

    addComponent: (typeOrFull) => {
      const comps = get().components;

      const newComponent: ComponentBlock =
        typeof typeOrFull === 'object'
          ? { ...typeOrFull, id: Math.floor(Math.random() * 1000000) } // <- selalu generate id baru
          : generateDefaultComponent(typeOrFull);

      set({ components: [...comps, newComponent] });
    },




    updateComponent: (id, data) => set(state => ({
      components: state.components.map(c =>
        c.id === id ? { ...c, ...data } : c
      )
    })),

    removeComponent: (id) => set(state => ({
      components: state.components.filter(c => c.id !== id)
    })),

    clearComponents: () => set({ components: [] }),


    appendComponents: (comps: Partial<ComponentBlock>[]) => {
      if (!Array.isArray(comps)) return;
      const processed = ensureUniqueIds(comps);
      set((state) => ({
        components: [...state.components, ...processed]
      }));
    },



    replaceComponents: (comps: Partial<ComponentBlock>[]) => set(() => ({
      components: ensureUniqueIds(comps)
    })),


    loadComponents: (comps: Partial<ComponentBlock>[]) => {
      if (!Array.isArray(comps)) {
        console.warn('[BuilderStore] loadComponents: Invalid format, expected array');
        return;
      }

      const processed = ensureUniqueIds(comps);
      console.debug('[BuilderStore] Loaded components with new IDs:', processed);

      set({ components: processed });
    },



  };
});




function generateDefaultComponent(type: ComponentType): ComponentBlock {
  // Use a simple incrementing number for id
  const nextId = Math.floor(Math.random() * 1000000); // or use a better id generator if needed
  switch (type) {
    case 'header':
      return { id: nextId, type, text: 'My Header', color: '#333333' };
    case 'section':
      return { id: nextId, type, text: 'Section Content', color: '#555555' };
    case 'image':
      return { id: nextId, type, src: 'https://pasarglodok.com/wp-content/uploads/2025/06/logo-header.png' };
    case 'button':
      return { id: nextId, type, text: 'Click Me', color: '#007bff' };
    default:
      throw new Error(`Unknown component type: ${type}`);
  }
}