<template>
	<div class="container">
		<div class="row g-2 row-cols-md-2">
			<div v-for="(item, key) in datos" :key="key">
				<div class="w-100 h-100 p-3 rounded rounded-3 fichaMenu">
					<div class="text-center mb-2" style="font-size: 3rem; font-family: comScript;">{{ key }}</div>
					<p></p>
					<div class="text-center" style="font-size: large;">{{ item.descripcion }}</div>
					<li class="ms-5" v-for="(opcion, key3) in item.opciones" :key="key3">{{ opcion }}</li>
					<p></p>
					<div v-for="(plato, key2) in item.platos" :key="key2">
						<div class="d-flex flex-nowrap justify-content-between fw-bold" style="font-size: x-large;">
							<div>{{ plato.nombre }}</div>
							<div class="text-nowrap d-flex justify-content-between" style="min-width: 100px;">
								<div class="text-nowrap" v-if="plato.costo2">$ {{ plato.costo2 }}</div>
								<p class="text-nowrap" v-else></p>
								<div class="text-nowrap">$ {{ plato.costo }}</div>
							</div>
						</div>
						<div class="ps-2" style="font-size: large;">{{ plato.descripcion }}</div>
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
	min-width: 320px;
}
</style>