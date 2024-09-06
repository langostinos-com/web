//Router vue
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import MenuPage from './views/MenuPage.vue'
import ContactoPage from './views/ContactoPage.vue'

const routes = [
	{ path: '/', component: MainPage },
	{
		path: '/menu', component: MenuPage,
		children: [
			{ path: ':categoria', component: MenuPage },
			{ path: '', redirect : '/menu/principal' },			
		]
	},
	{ path: '/contacto', component: ContactoPage },
	{ path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 };
	},
	routes
})

router.beforeEach((to, from, next) => {
	if (to.path.startsWith('/menu')) {
		document.body.style.backgroundColor = "whitesmoke";
		document.body.style.color = "#00253E";
	} else {
		document.body.style.backgroundColor = "#00253E";
		document.body.style.color = "whitesmoke";
	}
	next()
})

export default router