<template>
	<div style="height: 90px"></div>
	<ul class="nav nav-pills mb-3 justify-content-center gap-2" id="pills-tab" role="tablist">
		<li class="nav-item" role="presentation">
			<button class="nav-link" :class="{ active: categoria == 'principal' }" @click="cambio('principal')" data-bs-toggle="pill" type="button">Principal</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" :class="{ active: categoria == 'sushi' }" @click="cambio('sushi')" data-bs-toggle="pill" type="button">Sushi</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" :class="{ active: categoria == 'bebidas' }" @click="cambio('bebidas')" data-bs-toggle="pill" type="button">Bebidas</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" :class="{ active: categoria == 'otros' }" @click="cambio('otros')" data-bs-toggle="pill" type="button">Otros</button>
		</li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane" :class="{ active: categoria == 'sushi' }"><ListaMenu :datos = "datos.menuSushi"/></div>
		<div class="tab-pane" :class="{ active: categoria == 'principal' }"><ListaMenu :datos = "datos.menuPrincipal"/></div>
		<div class="tab-pane" :class="{ active: categoria == 'bebidas' }"><ListaMenu :datos = "datos.menuBebidas"/></div>
		<div class="tab-pane" :class="{ active: categoria == 'otros' }"><ListaMenu :datos = "datos.menuOtros"/></div>
	</div>
</template>

<script>
import datos from "../assets/datos.json";
import ListaMenu from "@/components/ListaMenu.vue";
import Proximamente from "@/components/Proximamente.vue";

export default {
	name: "MenuPage",
	methods: {
		cambio(a) {
			this.$router.push({ path: `/menu/${a}` });
		}
	},
	components: {
		ListaMenu,
		Proximamente
	},
	data() {
		return {
			categoria: "",
			datos
		}
	},
	watch: {
		$route() {
			this.categoria = this.$route.params.categoria;
		}
	},
	mounted() {
		this.categoria = this.$route.params.categoria;
	}
}
</script>
<style>
.nav-pills {
	padding: 0.2rem;
}
.nav-link  {
	width: 100px;
	background-color: #ffffff00;
	color: #00253E;
	border: #ffffff00 1px solid;
}
.nav-pills .nav-link.active {
	background-color: #00253E;
}
.nav-link:hover {
	border: #00253E 1px solid;
	color: #00253E;
}
</style>
