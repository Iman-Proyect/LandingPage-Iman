import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";
import HomeContent from "@/pages/home-content.vue";


const routes = [
    {
        path: '/',
        name: 'home-content',
        component: HomeContent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router