import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

import './assets/main.css'

createApp(App).mount('#app')

function tampilkanData() {
    let nama = document.getElementById("nama").value;
    document.getElementById("hasil").innerHTML = "Nama Anda: " + nama;
  }
  