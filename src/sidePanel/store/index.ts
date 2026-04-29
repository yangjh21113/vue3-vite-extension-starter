import { defineStore } from 'pinia'

interface SidePanelState {
  // Add your side panel state here
}

export const useSidePanelStore = defineStore('sidePanel', {
  state: (): SidePanelState => ({
    // Initial state
  }),
  getters: {},
  actions: {}
})
