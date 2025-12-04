import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import AboutUs from "./components/AboutUs.vue"; 
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Inquire from "./components/Inquire.vue";

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Contact',
        component: Contact,
        path: '/contact'
    },
    {
        name: 'AboutUs',
        component: AboutUs,
        path: '/about'
    },
    {
        name: 'Services',
        component: Services,
        path: '/services'
    },
    {
        name: 'Projects',
        component: Projects,
        path: '/projects'
    },
    {
      name: 'Inquire',
      component: Inquire,
      path: '/inquire'
    }
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // When navigating back/forward
      return savedPosition;
    } else if (to.hash) {
      // Scroll to anchor hash with smooth behavior
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // Scroll to top of page with smooth behavior
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;