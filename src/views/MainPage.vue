<template>
	<div class="w-100 h-100">
		<div id="mainCarousel" class="carousel slide h-75 w-100 position-absolute " data-bs-ride="carousel" style="min-height: 500px;">
			<div class="carousel-inner h-100 w-100">
				<div class="carousel-item active" data-bs-interval="7000">
					<img :src=imagenes.fondo  class="h-100 w-100" :alt=imagenes.fondo style="object-fit: cover;"/>
				</div>
				<div v-for="(imagen,key) in imagenes.fondos" :key="key" class="carousel-item" data-bs-interval="7000">
					<img :src=imagen class="h-100 w-100" :alt="imagen" style="object-fit: cover;"/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
				<span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
			</button>	
		</div>
		<div class="w-100 h-75 d-flex justify-content-center position-absolute" style="min-width: 250px; min-height: 500px;">
			<div class="w-50 d-grid align-content-around justify-content-center">
				<div style="height: 55px;"></div>
				<img :src="imagenes.empresa.logo" class="img-fluid mx-auto" :alt="imagenes.empresa.logo" style="max-height: 300px;">
				<img :src="imagenes.empresa.logotipo" class="img-fluid d-sm-block w-75 mx-auto d-none" alt="logotipo" style="max-height: 300px;">
				<button type="button" class="btn btn-primary w-50 mx-auto text-nowrap" @click="test" style="height: 50px; min-width: fit-content">Ver menu</button>
			</div>
		</div>
		<div class="w-100 h-75 position-relative" style="min-width: 250px; min-height: 500px;"/>
		<div class="text-center p-5 d-inline">
			<h1 class="">{{info.nombre}}</h1>
			<p class="lead" style="font-size: xx-large;">{{info.eslogan}}</p>
		</div>
	</div>
</template>

<script>
import datos from "@/assets/datos.json";

export default {
	methods: {
		toMenu() {
			this.$router.push("/menu");
		},
		test() {
			console.log(this.imagenes.fondos);
		}
	},
	data() {
		return {
			info: datos.info,
			imagenes: datos.imagenes,
			redes: datos.redes,
			testa:'@/assets/logo.webp'
		}
	}
}
</script>

<style>
	.carousel-item {
		height: 100%;
		width: 100%;
	}

</style>
