<template>
	<div class="position-relative overflow-hidden rounded-3 carta" @click="cuentaToques">
		<div class="h-100 w-100 d-flex align-items-center" style="background-color: black;">
			<div class="w-100 text-center fs-3">Ver menú de {{ nombre }}</div>
		</div>
		<img :src="data.img2" class="h-100 w-100 position-absolute" style="object-fit: cover; opacity: 0.5;" :alt="nombre + '2'">
		<img :src="data.img" class="h-100 w-100 position-absolute imgCarta" :alt="nombre">
		<div class="position-absolute w-100 align-self-end" style="background-color: #01111b;">
			<div class="text-capitalize w-100 text-center">{{ nombre }}</div>
		</div>
	</div>
</template>

<script>
import router from "@/Router";

export default {
	methods: {
		cuentaToques() {
			this.contador++;
			if (this.$contadorGlobal.value != this.nombre) {
				this.$contadorGlobal.value = this.nombre;
				this.contador = 0;
			} else if (this.contador >= 1) {
				this.contador = 0;
				this.$contadorGlobal.value = "";
				this.router.push("/menu" , this.nombre);
			}
		},
	},
	props: {
		data: {
			type: Object,
			required: true
		},
		nombre: String,
	},
	data() {
		return {
			contador: 0,
			router: router
		}
	}
}
</script>
<style>
.imgCarta {
	object-fit: cover;
	transition: opacity 0.7s ease-in-out;
}

.imgCarta:hover {
	opacity: 0;
	transition: opacity 0.7s ease-in-out;
}

.carta {
	transition: flex-grow 0.5s ease-in-out, flex-basis 0.5s ease-in-out;
	flex-grow: 1;
	flex-basis: 25%;
	display: flex;
	font-family: 'Times New Roman', Times, serif;
}

.carta:hover {
	flex-basis: 40%;
	transition: flex-grow 2s ease-in-out, flex-basis 0.5s ease-in-out;
}
@media (max-width: 768px) {
	.carta {
		width: 100%;
	}
}
</style>