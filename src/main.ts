import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQrcode, faCopy, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

library.add(faQrcode, faCopy, faTrash, faTimes)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
