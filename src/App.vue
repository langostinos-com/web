<template>
	<FondoPag class="z-0 position-fixed w-100"/>
	<div class="z-1 position-absolute w-100">
		<RouterView />
		<BarraFooter />
	</div>
	<BarraInicio class="z-2 position-fixed w-100"/>
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
