<template>
	<div id="BarraInicio" class="w-100">
		<nav class="navbar p-2 justify-content-center">
			<div class="barraCell rounded-3 d-md-none container flex-nowrap shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#MenuCompacto" aria-controls="MenuCompacto">
				<img :src="imagenes.empresa.logotipo" style="height:35px" alt="Langostinos.com"/>
				<i class="bi bi-list" style="font-size: 35px;"></i>
			</div>
			<div class="rounded-3 d-none d-md-flex w-75 flex-nowrap p-1 align-items-center shadow p-2" style="background-color: whitesmoke;">
				<img :src="imagenes.empresa.logo" class="me-1 rounded-1 d-none" style="width: 60px ; background-color: #00253E;" alt="logo" />
				<div class="gap-2 d-flex w-100 me-2">
					<button type="button" class="btn botonesBarra" @click="funcion.toInicio" to="/">Inicio</button>
					<button type="button" class="btn botonesBarra" @click="funcion.toMenu" to="/menu">Menu</button>
					<button type="button" class="btn botonesBarra" @click="funcion.toContacto" to="/contacto">Contacto</button>
				</div>
				<button type="button" class="btn botonPedir w-25 text-nowrap" @click="funcion.toWp" style="height: 50px; font-family: 'Times New Roman', Times, serif;">¡Pide ahora!</button>
			</div>
		</nav>
		<div class="offcanvas offcanvas-end w-75 shadow rounded-start-3 justify-content-between p-3 overflow-y-auto" tabindex="-1" id="MenuCompacto" aria-labelledby="MenuCompacto">
			<div>
				<div class="offcanvas-header justify-content-around">
					<img type="button" :src="imagenes.empresa.logotipoOscuro" style="height:9vw;" alt="Langostinos.com" data-bs-dismiss="offcanvas"/>
				</div>
				<hr class="w-75 m-auto">
			</div>
			<div class="d-grid gap-2">
				<button type="button" data-bs-dismiss="offcanvas" class="btn text-start border-0" @click="funcion.toInicio" >Inicio</button>
				<button type="button" data-bs-dismiss="offcanvas" class="btn text-start border-0" @click="funcion.toMenu" >Menu</button>
				<button type="button" data-bs-dismiss="offcanvas" class="btn text-start border-0" @click="funcion.toContacto" >Contacto</button>
			</div>
			<div>
				<button type="button" class="btn btn-lg w-100" @click="funcion.toWp">¡Pide ahora!</button>
				<div class="text-center fst-italic d-sm-flex gap-5 mt-3" style="font-size: small;">
				<div >
					© Copyrights 2024 Langostinos.com - All Rights Reserved
				</div>
				<a href="https://github.com/leoleguizamon97" class="text-nowrap text-decoration-none" style="color: #00253E;"  target="_blank">
					<i class="bi bi-github"></i>
					@leoleguizamon97
				</a>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
import datos from "../assets/datos.json";
import funcion from "../assets/funciones.js";

export default {
	data() {
		return {
			imagenes: datos.imagenes,
			funcion: funcion,
		}
	},
};
</script>
<style>
.offcanvas {
	background-color: whitesmoke;
	color: #00253E;
	font-family: 'Times New Roman', Times, serif;
	font-size: larger;
}
.offcanvas button {
	font-size: large;
	border: #00253E 1px solid;
}
.offcanvas button:hover {
	background-color: #00253E;
	color: whitesmoke;
}
.offcanvas button:focus {
	background-color: #00253E;
	color: whitesmoke;
}
.barraCell {
	background-color: #00253E;
	color: whitesmoke;
	border: whitesmoke 1px solid;
}


</style>
