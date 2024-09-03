<template>
	<div class="w-100 h-100">
		<div style="height: 90px"></div>
		<Proximamente class="w-100 h-100"/>
	</div>
</template>

<script>
	import Proximamente from '@/components/Proximamente.vue';

	export default {
		components: {
			Proximamente
		},
		props: {
			datos: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>