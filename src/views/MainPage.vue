<template>
	<div class="w-100 h-100">
		<div id="mainCarousel" class="carousel slide w-100 position-absolute h-75" data-bs-ride="carousel" style="min-height: 550px">
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
		<div class="w-100 h-75 d-flex justify-content-center position-absolute" style="min-width: 250px; min-height: 500px">
			<div class="w-50 d-grid align-content-around justify-content-center p-3">
				<div class="" style="height: 70px;"></div>
				<img :src="imagenes.empresa.logo" class="img-fluid mx-auto" :alt="imagenes.empresa.logo" style="max-width: 300px;">
				<img :src="imagenes.empresa.logotipo" class="img-fluid w-75 mx-auto d-sm-block d-none mb-2" alt="logotipo" style="max-height: 300px;">
				<button type="button" class="btn btn-primary w-50 mx-auto text-nowrap" @click="toMenu" style="height: 50px; min-width: 200px">Ver menu</button>
			</div>
		</div>
		<div class="w-100 h-75 position-relative" style="min-width: 250px; min-height: 550px;"/>
		<div class="text-center p-5 d-inline w-100">
			<h1 class="text-nowrap titulo">{{info.nombre}}</h1>
			<p class="parrafo">{{info.eslogan}}</p>
		</div>
		<div class="bg-dark" style="min-height: 500px; min-width: 250px;">

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
	@font-face {
		font-family: adelia;
		src: url(../assets/fonts/adelia.otf) format('opentype');
	}
	.titulo {
		font-family: 'adelia', sans-serif;
		font-size: 10vw;
		margin: 1rem auto;
	}
	.parrafo{
		font-size: 1.5rem;
		font-family: 'Times New Roman', Times, serif;
		margin: 2rem 10px;
	}
	.carousel-item {
		height: 100%;
		width: 100%;
	}
	@media (min-width: 576px) and (max-width: 799px) {
		.titulo {
			font-size: 7vw;
		}
		.parrafo{
			width: 70%;
			margin: 2rem auto;
		}
	}
	@media (min-width: 799px)  {
		.titulo {
			font-size: 4vw;
			margin: 3rem auto;
		}
		.parrafo{
			width: 50%;
			margin: 2rem auto;
		}
	}
</style>
