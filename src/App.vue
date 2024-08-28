<template>
	<FondoPag class="position-absolute user-select-none"/>
	<div class="position-absolute w-100 h-100">
		<RouterView />
		<BarraFooter />
	</div>
	<BarraInicio class="position-fixed w-100"/>
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
