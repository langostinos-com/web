<template>
	<CarouselMain class="position-absolute carrusel"/>
	<SobreCarousel class="position-absolute carrusel"/>
	<div class="carrusel"/>
	<div class="text-center w-100 align-content-center" style="height: 400px;">
		<h1 class="titulo">{{info.nombre}}</h1>
		<p class="parrafo my-5">{{info.eslogan}}</p>
		<button type="button" class="btn botonContacto d-block mx-auto" @click="funcion.toWp">Haz tu reserva</button>
	</div>
	<InfoBox/>
	<VitrinaMain/>
</template>

<script>
import datos from "@/assets/datos.json";
import funcion from "@/assets/funciones.js";

import CarouselMain from "@/components/CarouselMain.vue";
import SobreCarousel from "@/components/SobreCarousel.vue";
import InfoBox from "@/components/InfoBox.vue";
import VitrinaMain from "@/components/VitrinaMain.vue";

export default {
	data() {
		return {
			info: datos.info,
			funcion: funcion
		}
	},
	components: {
		CarouselMain,
		SobreCarousel,
		InfoBox,
		VitrinaMain,
	},
}
</script>
<style>
.carrusel {
	width: 100%;
	height: 75vh;
	min-height: 550px;
}
</style>
