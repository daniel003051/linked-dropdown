import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

// kintone.events.on('app.record.index.show', (event: KintoneEvent) => {
//   const myContainer = kintone.app.getHeaderSpaceElement() as HTMLElement
//   const app = createApp(App)
//   app.use(pinia)
//   app.mount(myContainer)
//   console.log('app.record.index.show')
//   return event
// })

kintone.events.on('app.record.edit.show', (event: KintoneEvent) => {
  const myContainer = kintone.app.record.getSpaceElement('elementCity') as HTMLElement
  const app = createApp(App)
  app.use(pinia)
  app.mount(myContainer)
  event.record.result.disabled = true
  return event
})

kintone.events.on('app.record.create.show', (event: KintoneEvent) => {
  const myContainer = kintone.app.record.getSpaceElement('elementCity') as HTMLElement
  const app = createApp(App)
  app.use(pinia)
  app.mount(myContainer)
  event.record.result.disabled = true
  return event
})
