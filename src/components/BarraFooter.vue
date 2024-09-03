<template>
	<div class="d-flex w-100 py-3">
		<div class="piePag justify-content-between shadow-lg rounded-3" style="font-family: 'Times New Roman', Times, serif; color: #00253E;">
			<img class="mx-auto d-block" :src="datos.imagenes.empresa.logotipoOscuro" alt="langostinos.com" style="height: 60px;">
			<div class="text-center">
				<div>{{ datos.info.direccion }}</div>
				<div>{{ datos.info.ciudad }} | {{ datos.info.pais }}</div>
			</div>
			<div class="d-flex w-50 justify-content-around fs-5" style="min-width: 300px;">
				<div class="icono" @click="funcion.toWp" title="Whatsapp">
					<i class="bi bi-whatsapp"></i>
				</div>
				<div class="icono" @click="funcion.toIg" title="Instagram">
					<i class="bi bi-instagram"></i>
				</div>
				<div class="icono" @click="funcion.toYt" title="Youtube">
					<i class="bi bi-youtube"></i>
				</div>
				<div class="icono" @click="funcion.toTiktok" title="Tiktok">
					<i class="bi bi-tiktok"></i>
				</div>
			</div>
			<div class="text-center fst-italic d-sm-flex gap-5" style="font-size: small;">
				<div >
					© Copyrights 2024 Langostinos.com - All Rights Reserved
				</div>
				<a href="https://github.com/leoleguizamon97" class="text-nowrap text-decoration-none" style="color: #00253E;"  target="_blank">
					<i class="bi bi-github"></i>
					@leoleguizamon97
				</a>
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
				datos: datos,
				funcion: funcion
			}
		},
	}
</script>
<style>
.icono {
	width: 40px;
	height: 40px;
	border: 2px solid #00253E;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	display: flex;
	cursor: pointer;
}
.icono:hover {
	background-color: #00253E;
	color: whitesmoke;
}
.piePag {
	background-color: whitesmoke;
	height: 220px;
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	padding: 1rem 1rem 0.5rem 1rem;
}
@media ( max-width: 500px ) {
	.piePag {
		padding: 1rem 0rem;
		height: 300px;
	}
}
</style>
