<template>
	<div class="bg-danger" style="height: 500px;">
		<img src="" alt="">

	</div>
</template>

<script>
	import datos from "@/assets/datos.json";
	import funcion from "@/assets/funciones.js";

	export default {
		data() {
			return {
				info: datos.info,
				funcion: funcion
			}
		},
	}
</script>
<style></style>
