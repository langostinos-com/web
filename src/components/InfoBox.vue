<template>
	<div class="infoBox shadow">
		<div class="presentacion">
			<div class="fs-1 fst-italic mb-5">{{ info.invitacion }}</div>
			<div class="fs-4">{{ info.texto }}</div>
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
			<div class="text-nowrap">
				<i class="bi bi-envelope me-2"></i>
				<a class="fs-6" :href="'mailto:'+info.email" style="color: #00253E;">
					{{ info.email }}
				</a>
			</div>
			<p></p>
			<i class="bi bi-clock me-1"></i>
			Horario
			<div class="">
				<div>{{ info.horario }}</div>
				<div>{{ info.horarioFin }}</div>
			</div>
		</div>
		<div class="mapa rounded-3 w-100 h-100 align-self-center shadow" @click="dobleClick" style="color: blue; max-height: 550px;">
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
	methods: {
		dobleClick() {
			//Solo va si hace click dos veces
			if (this.contador == 0) {
				this.contador++;
			} else if (this.contador == 1) {
				this.contador = 0;
				funcion.toMap();
			}
		}	
	},
	data() {
		return {
			contador: 0,
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