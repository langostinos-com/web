<template>
	<div id="mainCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000" data-pause="true">
		<div class="carousel-inner h-100 w-100">
			<div class="carousel-item active">
				<img :src=imagenes.fondo  class="h-100 w-100" :alt=imagenes.fondo style="object-fit: cover;"/>
			</div>
			<div v-for="(imagen,key) in imagenes.fondos" :key="key" class="carousel-item">
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
</template>

<script>
import datos from "@/assets/datos.json";

export default {
	data() {
		return {
			imagenes: datos.imagenes,
		}
	}
}
</script>

<style></style>