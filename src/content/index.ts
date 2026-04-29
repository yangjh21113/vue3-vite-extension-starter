import { createApp } from 'vue'
import '@/common/assets/styles/global.scss'
import Content from '@/content/content.vue'

// Create container div
const crxApp = document.createElement('div')
crxApp.id = 'CRX-container'
document.body.appendChild(crxApp)

// Create Vue app
const app = createApp(Content)
app.mount('#CRX-container')
