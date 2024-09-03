//Router vue
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import MenuPage from './views/MenuPage.vue'
import ContactoPage from './views/ContactoPage.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/menu', component: MenuPage },
	{ path: '/contacto', component: ContactoPage }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	if(to.path == '/menu') {
		document.body.style.backgroundColor = "whitesmoke";
		document.body.style.color = "#00253E";
	} else {
		document.body.style.backgroundColor = "#00253E";
		document.body.style.color = "whitesmoke";
	}
	next()
})

export default router