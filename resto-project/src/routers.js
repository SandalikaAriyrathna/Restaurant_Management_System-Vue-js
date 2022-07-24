import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import ContactUs from './components/ContactUs.vue'
import AboutUs from './components/AboutUs.vue'
import Dashboard from './components/Dashboard.vue'
import RestManage from './components/RestManage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'ContactUs',
        component: ContactUs,
        path: '/contact-us'
    },
    {
        name: 'AboutUs',
        component: AboutUs,
        path: '/about-us'
    },
    {
        name: 'Dashboard',
        component: Dashboard,
        path: '/dashboard'
    },
    {
        name: 'RestManage',
        component: RestManage,
        path: '/restmanage'
    },
  


];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
