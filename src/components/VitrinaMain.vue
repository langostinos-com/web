<template>
	<div class="w-100 px-2 py-5">
		<div class="vitrina gap-2">
			<FichaVitrina class="p-0 m-0" v-for="(data, key) in imagenes.menu" :key="key + 'vit'" :data="data" :nombre="key" />
		</div>
	</div>
</template>

<script>
import datos from "@/assets/datos.json";
import funcion from "@/assets/funciones.js";

import FichaVitrina from "@/components/FichaVitrina.vue";

export default {
	components: {
		FichaVitrina
	},
	data() {
		return {
			imagenes: datos.imagenes,
			funcion: funcion,
		}
	}
}
</script>
<style>
.vitrina {
	display: flex;
	width: 100%;
	height: 60vh;
}
@media (max-width: 768px) {
	.vitrina {
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 80vh;
		min-height: 300px;
	}
}
</style>