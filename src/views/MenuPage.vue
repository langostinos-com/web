<template>
	<div style="height: 90px"></div>
	<ul class="nav nav-pills mb-3 justify-content-center gap-2" id="pills-tab" role="tablist">
		<li class="nav-item" role="presentation">
			<button class="nav-link active" id="pills-principal-tab" data-bs-toggle="pill" data-bs-target="#pills-principal" type="button" role="tab" aria-controls="pills-principal" aria-selected="true">Principal</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="pills-sushi-tab" data-bs-toggle="pill" data-bs-target="#pills-sushi" type="button" role="tab" aria-controls="pills-sushi" aria-selected="false">Sushi</button>
		</li>
		<li class="nav-item" role="presentation">
			<button class="nav-link" id="pills-bebidas-tab" data-bs-toggle="pill" data-bs-target="#pills-bebidas" type="button" role="tab" aria-controls="pills-bebidas" aria-selected="false">Otros</button>
		</li>
	</ul>
	<div class="tab-content" id="pills-tabContent">
	<div class="tab-pane fade show active" id="pills-principal" role="tabpanel" aria-labelledby="pills-principal-tab" tabindex="0"><ListaMenu :datos = "datos.menuPrincipal"/></div>
	<div class="tab-pane fade" id="pills-sushi" role="tabpanel" aria-labelledby="pills-sushi-tab" tabindex="0"><ListaMenu :datos = "datos.menuSushi"/></div>
	<div class="tab-pane fade" id="pills-bebidas" role="tabpanel" aria-labelledby="pills-bebidas-tab" tabindex="0"><ListaMenu :datos = "datos.menuBebidas"/> <Proximamente/></div>
	</div>
</template>

<script>
import datos from "../assets/datos.json";
import ListaMenu from "@/components/ListaMenu.vue";
import Proximamente from "@/components/Proximamente.vue";

export default {
	name: "MenuPage",
	methods: {
		onload() {
			document.body.style.backgroundColor = "whitesmoke";
			document.body.style.color = "#00253E";
		}
	},
	components: {
		ListaMenu,
		Proximamente
	},
	data() {
		return {
			datos
		}
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
