//Router vue
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import MenuPage from './views/MenuPage.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/menu', component: MenuPage }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router