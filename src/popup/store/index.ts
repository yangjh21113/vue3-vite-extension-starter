import { defineStore } from 'pinia'

interface PopupState {
  // Add your popup state here
}

export const usePopupStore = defineStore('popup', {
  state: (): PopupState => ({
    // Initial state
  }),
  getters: {},
  actions: {}
})
