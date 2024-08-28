<template>
	<FondoPag class="position-absolute user-select-none"/>
	<div class="position-absolute w-100 h-100">
		<RouterView />
		<BarraFooter />
	</div>
	<BarraInicio class="barra position-fixed w-100"/>
</template>

<script>
import BarraInicio from "@/components/BarraInicio.vue";
import BarraFooter from "@/components/BarraFooter.vue";
import FondoPag from "@/components/FondoPag.vue";

export default {
	components: {
		BarraInicio,
		BarraFooter,
		FondoPag,
	},
};
</script>
<style>
.barra {
	z-index: 3;	
}
.botonPedir {
	background-color: #00253E;
	color: whitesmoke;
}
.botonPedir:hover {
	background-color: whitesmoke;
	color: #00253E;
	border:solid 1px;
	border-color: #00253E;
}
</style>
