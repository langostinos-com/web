<template>
	<div class="d-grid px-5 py-3">
		<div style="height: 50px;"></div>
		<img :src="imagenes.empresa.logo" class="w-100 d-block mx-auto" alt="logoMMMMMMMMMMMMMMMMMM" style="max-width: 375px;">
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