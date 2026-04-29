/* global chrome */
import webRequest from '@/api/request'

// manifest.json 的 Permissions 配置需添加 declarativeContent 权限
chrome.runtime.onInstalled.addListener(function () {
  // Page Action rules can be configured here
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, () => { ... })
})

// Generic message handler — supports apiRequest from content scripts or popup
chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
  const { type, config } = request

  if (type === 'apiRequest' && config) {
    webRequest(config)
      .then((data: unknown) => sendResponse({ result: 'success', data }))
      .catch((err: unknown) => sendResponse({ result: 'error', error: err }))
    return true // keep channel open for async response
  }

  // Echo handler for testing
  if (type === 'ping') {
    sendResponse({ result: 'pong' })
  }
})
