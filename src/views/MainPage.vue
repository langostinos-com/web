<template>
	<div class="w-100 h-100">
		<CarouselMain class="w-100 h-75 position-absolute" style="min-height: 550px"/>
		<SobreCarousel class="w-100 h-75 position-absolute" style="min-height: 500px; min-width: 250px;"/>
		<div class="w-100 h-75" style="min-width: 250px; min-height: 550px;"/>
		<div class="text-center w-100 align-content-center" style="height: 400px;">
			<h1 class="titulo">{{info.nombre}}</h1>
			<p class="parrafo my-5">{{info.eslogan}}</p>
			<button type="button" class="btn botonContacto d-block mx-auto" @click="funcion.toContacto">Escribenos</button>
		</div>
		<InfoBox/>
		<VitrinaMain/>
	</div>
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
<style></style>
