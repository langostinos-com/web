<template>
	<div id="BarraInicio">
		<nav class="navbar p-2 justify-content-center">
			<div class="rounded-3 d-md-none container flex-nowrap shadow" style="min-width: fit-content; background-color: #00253E;">
				<img src="../assets/logotipo.png" style="height:35px" alt="Langostinos.com"/>
				<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#MenuCompacto" aria-controls="MenuCompacto">
					<img src="../assets/logo.webp" class="" style="width: 40px ; background-color: #00253E;" alt="logo" />
				</button>
			</div>
			<div class="rounded-3 d-none d-md-flex w-75 flex-nowrap p-1 align-items-center shadow" style="background-color: whitesmoke;">
				<img src="../assets/logo.webp" class="me-1 rounded-1 d-none" style="width: 60px ; background-color: #00253E;" alt="logo" />
				<div class="gap-2 d-flex w-100 me-2">
					<button type="button" class="btn botonesBarra" @click="toInicio" to="/">Inicio</button>
					<button type="button" class="btn botonesBarra" @click="toMenu" to="/menu">Menu</button>
					<button type="button" class="btn botonesBarra" @click="toContacto" to="/contacto">Contacto</button>
				</div>
				<button type="button" class="btn botonPedir w-25 text-nowrap" @click="toWp" style="height: 50px;">¡Pide ahora!</button>
			</div>
		</nav>
		<div class="offcanvas offcanvas-end w-75 shadow" tabindex="-1" id="MenuCompacto" aria-labelledby="MenuCompacto" >
			<div class="offcanvas-header ">
				<img src="../assets/logotipo.png" style="height:35px; background-color: #00253E;" alt="Langostinos.com"/>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
			</div>
			<div class="p-4 d-grid gap-5">
				<div class="d-grid gap-2">
					<button type="button" data-bs-dismiss="offcanvas" class="btn btn-outline-primary text-start border-0" @click="toInicio" >Inicio</button>
					<button type="button" data-bs-dismiss="offcanvas" class="btn btn-outline-primary text-start border-0" @click="toMenu" >Menu</button>
					<button type="button" data-bs-dismiss="offcanvas" class="btn btn-outline-primary text-start border-0" @click="toContacto" >Contacto</button>
				</div>
				<button type="button" class="btn btn-primary btn-lg w-100" @click="toWp">¡Pide ahora!</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		toInicio() {
			this.$router.push("/");
		},
		toMenu() {
			this.$router.push("/menu");
		},
		toContacto() {
			this.$router.push("/contacto");
		},
		toWp() {
			window.open("https://wa.me/+573115165374?text=Hola!%20Quiero%20hacer%20un%20pedido.", "_blank");
		}
	},
};
</script>

<style>
.botonesBarra {
	border: 0;
	background-color: transparent;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: auto;
	
}
.botonesBarra:hover {
	background-color: #00253E;
	color: whitesmoke;
}
</style>
