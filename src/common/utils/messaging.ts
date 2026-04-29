/* global chrome */

// Chrome extension messaging utility
// Usage examples:
//
// 1. Popup/SidePanel → Background:
//    const res = await sendMessageToBackground({ type: 'getStorage', key: 'myKey' })
//
// 2. Content Script → Background:
//    const res = await sendMessageToBackground({ type: 'apiRequest', url: 'https://example.com' })
//
// 3. Background → Content Script (active tab):
//    const res = await sendMessageToContent({ type: 'updateUI', data: { theme: 'dark' } })

export const sendMessageToBackground = <T = unknown>(message: Record<string, unknown>): Promise<T> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response: T | undefined) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      resolve(response as T)
    })
  })
}

export const sendMessageToContent = <T = unknown>(tabId: number, message: Record<string, unknown>): Promise<T> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, (response: T | undefined) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      resolve(response as T)
    })
  })
}
