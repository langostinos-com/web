<template>
	<BarraInicio class="barra position-fixed"/>
	<FondoPag class="position-fixed"/>
	<div class="position-relative">
		<RouterView/>
		<BarraFooter/>
	</div>
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
<style></style>
