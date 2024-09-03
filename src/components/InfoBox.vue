<template>
	<div class="infoBox">
		<div class="presentacion">
			<div class="fs-2 fst-italic mb-5">{{ info.invitacion }}</div>
			<div class="fs-5">{{ info.texto }}</div>
		</div>
		<div class="info">
			<hr>
			<div>
				<i class="bi bi-geo-alt me-1"></i>
				{{ info.direccion }}
			</div>
			<div>{{ info.ciudad }}, {{ info.pais }}</div>
			<p></p>
			<div @click="funcion.toWp" style="cursor: pointer;">
				<i class="bi bi-whatsapp me-1"></i>
				{{ info.celular }}
			</div>
			<div>
				<i class="bi bi-envelope me-1"></i>
				<a :href="'mailto:'+info.email">
					{{ info.email }}
				</a>
			</div>
			<p></p>
			<i class="bi bi-clock me-1"></i>
			Horario
			<ul class="text-start">
				<li>{{ info.horario }}</li>
				<li>{{ info.horarioFin }}</li>
			</ul>
		</div>
		<div class="mapa rounded-3" @click="funcion.toMap" style="color: blue;">
			<img class="w-100 h-100" :src="imagenes.mapa" alt="mapa" style="object-fit: cover;">
			<div class="overlayMap text-center w-100 align-content-center">
				<div class="fs-1 d-block fst-italic">
					<i class="bi bi-geo-alt me-1"></i>
					Como llegar
				</div>
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
			funcion: funcion
		}
	}
}
</script>
<style>
.overlayMap {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.3);
	color: whitesmoke;
	opacity: 0;
}
.mapa:hover .overlayMap {
	opacity: 1;
}
</style>