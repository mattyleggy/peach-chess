import { create } from 'zustand'

interface ModalStore {
  isOpen: boolean
  selectedPlan: { name: string; price: string } | null
  onOpen: (plan?: { name: string; price: string }) => void
  onClose: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedPlan: null,
  onOpen: (plan?) => set({ isOpen: true, selectedPlan: plan || null }),
  onClose: () => set({ isOpen: false, selectedPlan: null }),
})) 