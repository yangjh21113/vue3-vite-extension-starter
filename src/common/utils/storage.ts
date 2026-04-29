/* global chrome */
export const StorageKey = {
  Theme: 'crx-theme'
}

export const isChrome = () => {
  if (typeof chrome.runtime === 'undefined') {
    return false
  }
  return true
}

export const setStorage = async (key: string, value: string) => {
  if (isChrome()) {
    await chrome.storage.local.set({ [key]: value })
    return
  }
  localStorage.setItem(key, value)
}

export const getStorage = async (key: string): Promise<string> => {
  if (isChrome()) {
    const res = await chrome.storage.local.get(key)
    return res[key] as string
  }
  return localStorage.getItem(key) as string
}
