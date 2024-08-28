<template>
	<div class="w-100 h-100">
		<div id="mainCarousel" class="carousel slide h-75 w-100 position-absolute" data-bs-ride="carousel" style="min-height: 500px;">
			<div class="carousel-inner h-100 w-100">
				<div class="carousel-item active" data-bs-int2rval="6000">
					<img src="../assets/tempPics/wp1.jpg" class="h-100 w-100" alt="picN1" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="6000">
					<img src="../assets/tempPics/wp2.jpg" class="h-100 w-100" alt="picN2" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="6000">
					<img src="../assets/tempPics/wp3.jpg" class="h-100 w-100" alt="picN3" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="6000">
					<img src="../assets/tempPics/wp4.jpg" class="h-100 w-100" alt="picN4" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="6000">
					<img src="../assets/tempPics/wp5.jpg" class="h-100 w-100" alt="picN5" style="object-fit: cover;"/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
				<span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
			</button>	
		</div>
		<div class="w-100 h-75 d-flex justify-content-center position-absolute" style="min-width: 250px; min-height: 500px;">
			<div class="w-50 d-grid align-content-around justify-content-center">
				<div style="height: 55px;"></div>
				<img src="../assets/logo.webp" class="img-fluid mx-auto" alt="logo" style="max-height: 300px;">
				<img src="../assets/logotipo.png" class="img-fluid d-sm-block w-75 mx-auto  d-none" alt="logotipo" style="max-height: 300px;">
				<button type="button" class="btn btn-primary w-50 mx-auto text-nowrap" @click="toMenu" style="height: 50px; min-width: fit-content">Ver menu</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			toMenu() {
				this.$router.push("/menu");
			}
		}
	}
</script>

<style>
	.carousel-item {
		height: 100%;
		width: 100%;
	}

</style>
