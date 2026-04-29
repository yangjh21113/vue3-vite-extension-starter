import { defineStore, acceptHMRUpdate } from 'pinia'

interface AppState {
  // Add your global state here
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    // Initial state
  }),
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
