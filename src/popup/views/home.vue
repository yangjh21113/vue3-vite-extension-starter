<template>
  <div class="popup-home">
    <h3>Chrome Extension Popup</h3>
    <p>Add your popup page content here</p>
    <el-button type="primary" @click="openSidePanel">Open Side Panel</el-button>
  </div>
</template>

<script setup lang="ts">
/* global chrome */
const openSidePanel = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tab?.id) {
    await chrome.sidePanel.open({ tabId: tab.id })
  }
}
</script>

<style scoped lang="scss">
.popup-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
}
</style>
