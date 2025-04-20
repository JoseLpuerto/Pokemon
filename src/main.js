import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';

import { createApp } from 'vue'
//import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
//import { Swal } from 'sweetalert2/dist/sweetalert2';


//createApp(App).use(Swal).mount('#app')

const app= createApp(App)
app.use(VueSweetalert2).mount('#app')

