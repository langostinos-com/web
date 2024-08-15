<template>
	<div class="w-100 h-100 justify-content-between z-0 position-absolute d-flex">
		<div class="d-flex flex-column overflow-hidden">
			<img class="align-self-start mb-2" style="width: max-content;" src="./assets/fondos/almeja.png" alt="">
			<img class="align-self-start mb-2" style="width: max-content;" src="./assets/fondos/naranja2.png" alt="">
		</div>
		<div class="d-sm-flex flex-column flex-fill justify-content-between d-none">
			<div class="d-flex justify-content-between">
				<img class="me-2" style="width: max-content;" src="./assets/fondos/almeja.png" alt="">
			</div>
			<div class="d-flex justify-content-between">
				<img class="me-2" style="width: max-content;" src="./assets/fondos/almeja.png" alt="">
			</div>
		</div>
		<div class="d-flex flex-column overflow-hidden">
			<img class="align-self-end" style="width: max-content;" src="./assets/fondos/cangrejo.png" alt="">
			<img class="align-self-end" style="width: max-content;" src="./assets/fondos/almeja.png" alt="">
		</div>
	</div>
	<RouterView class="z-1 position-absolute	"/>
</template>

<script></script>

<style>
	.img {

		width: auto;
		height: auto;
	}
</style>
