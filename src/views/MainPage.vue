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
		<div class="h-75 w-100 position-absolute" style="min-width: 250px; min-height: 525px">
			<div class="w-50 h-100 d-grid gap-4 pb-3 align-content-between justify-content-center m-auto">
				<div style="height: 50px;"></div>
				<img :src="imagenes.empresa.logo" class="img-fluid w-100 d-block m-auto" alt="logoMMMMMMMMMMMMMMMMMM" style="max-width: 300px;">
				<img :src="imagenes.empresa.logotipo" class="img-fluid w-100 d-sm-block d-none m-auto" alt="logotipo" style="max-width: 300px;">
				<button type="button" class="btn botonMenu d-block m-auto" @click="funcion.toMenu">Ver menu</button>
			</div>
		</div>
		<div class="w-100 h-75" style="min-width: 250px; min-height: 550px;"/>
		<div class="text-center w-100 align-content-center" style="height: 400px;">
			<h1 class="titulo">{{info.nombre}}</h1>
			<p class="parrafo my-5">{{info.eslogan}}</p>
			<button type="button" class="btn botonContacto d-block mx-auto" @click="funcion.toContacto">Escribenos</button>
		</div>
		<div class="infoBox">
			<div class="presentacion">
				<div class="fs-2 fst-italic">{{ info.invitacion }}</div>
				<p></p>
				<div>{{ info.texto }}</div>
			</div>
			<div class="info">
				<hr>
				<div>{{ info.direccion }}</div>
				<div>{{ info.ciudad }}, {{ info.pais }}</div>
				<p></p>
				<div>{{ info.celular }}</div>
				<div>{{ info.email }}</div>
				<p></p>
				<div >Horario</div>
				<div>{{ info.horario }}</div>
				<div>{{ info.horarioFin }}</div>
			</div>
			<div class="mapa">
				<img class="d-block m-auto" :src="imagenes.empresa.logo" alt="" style="min-width: 250px; width: 100%;">
			</div>
		</div>
	</div>
</template>

<script>
import datos from "@/assets/datos.json";
import funcion from "@/assets/funciones.js";

export default {
	data() {
		return {
			info: datos.info,
			imagenes: datos.imagenes,
			redes: datos.redes,
			testa:'@/assets/logo.webp',
			funcion: funcion
		}
	}
}
</script>
<style></style>
