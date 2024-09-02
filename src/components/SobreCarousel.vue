<template>
	<div class="d-grid gap-4 pb-3 align-content-between justify-content-center m-auto">
		<div style="height: 50px;"></div>
		<img :src="imagenes.empresa.logo" class="img-fluid w-100 d-block m-auto" alt="logoMMMMMMMMMMMMMMMMMM" style="max-width: 300px;">
		<img :src="imagenes.empresa.logotipo" class="img-fluid w-100 d-sm-block d-none m-auto" alt="logotipo" style="max-width: 300px;">
		<button type="button" class="btn botonMenu d-block m-auto" @click="funcion.toMenu">Ver menu</button>
	</div>
</template>
<script>
	import datos from "@/assets/datos.json";
	import funcion from "@/assets/funciones.js";

	export default {
		data() {
			return {
				imagenes: datos.imagenes,
				funcion: funcion
			}
		}
	}
</script>
<style></style>