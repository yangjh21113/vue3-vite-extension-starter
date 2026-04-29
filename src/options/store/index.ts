import { defineStore } from 'pinia'

interface OptionsState {
  // Add your options state here
}

export const useOptionsStore = defineStore('options', {
  state: (): OptionsState => ({
    // Initial state
  }),
  getters: {},
  actions: {}
})
