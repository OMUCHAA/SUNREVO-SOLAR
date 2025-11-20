import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// AOS imports For Scroll Animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init()

// Optional: refresh AOS after full page load
window.addEventListener('load', () => {
  AOS.refresh()
});

createApp(App).use(router).mount('#app');
