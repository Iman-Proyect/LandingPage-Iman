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
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;
            const target = document.querySelector(to.hash);

            if (target) {
                const top = target.offsetTop - headerHeight + 1;
                // Devuelve el desplazamiento con la propiedad `top`
                return { top, behavior: 'smooth' };
            }
        }
        return { top: 0 }; // Si no hay hash, devuelve la posición inicial
    }
})

export default router