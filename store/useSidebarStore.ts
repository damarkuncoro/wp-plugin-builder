import { create } from 'zustand'

interface SidebarStore {
  showComponentPanel: boolean
  openComponentPanel: () => void
  closeComponentPanel: () => void
  toggleComponentPanel: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  showComponentPanel: false,
  openComponentPanel: () => set({ showComponentPanel: true }),
  closeComponentPanel: () => set({ showComponentPanel: false }),
  toggleComponentPanel: () =>
    set((state) => ({ showComponentPanel: !state.showComponentPanel })),
}))
