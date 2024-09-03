<template>
	<div class="container">
		<div class="row g-2 row-cols-md-2 row-cols-xxl-3">
			<div v-for="(item, key) in datos" :key="key">
				<div class="w-100 h-100 p-3 rounded rounded-3 fichaMenu">
					<div class="fs-1 text-center mb-2" style="font-family: adelia;">{{ key }}</div>
					<p></p>
					<div class="text-center" style="font-size: small;">{{ item.descripcion }}</div>
					<p></p>
					<div v-for="(plato, key2) in item.platos" :key="key2">
						<div class="d-flex flex-nowrap justify-content-between fw-bold" style="font-size: larger;">
							<div>{{ plato.nombre }}</div>
							<div class="text-nowrap" v-if="plato.costo2">$ {{ plato.costo2 }}</div>
							<div class="text-nowrap">$ {{ plato.costo }}</div>
						</div>
						<div class="ps-2">{{ plato.descripcion }}</div>
						<ul>
							<li v-for="(opcion, key3) in plato.opciones" :key="key3">{{ opcion }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListaMenu",
	props: {
		datos: {
			type: Object,
		}
	},
}
</script>

<style>
.fichaMenu {
	font-family: 'Times New Roman', Times, serif;
	min-width: 320px;
	
}
</style>