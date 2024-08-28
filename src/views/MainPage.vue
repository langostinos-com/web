<template>
	<div class="w-100 h-100">
		<div id="mainCarousel" class="carousel slide h-75 w-100" data-bs-ride="carousel">
			<div class="carousel-inner h-100 w-100" style="min-height: 500px;">
				<div class="carousel-item active" data-bs-int2rval="2000">
					<img src="../assets/tempPics/wp1.jpg" class="h-100 w-100" alt="picN1" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="2000">
					<img src="../assets/tempPics/wp2.jpg" class="h-100 w-100" alt="picN2" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="2000">
					<img src="../assets/tempPics/wp3.jpg" class="h-100 w-100" alt="picN3" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="2000">
					<img src="../assets/tempPics/wp4.jpg" class="h-100 w-100" alt="picN4" style="object-fit: cover;"/>
				</div>
				<div class="carousel-item" data-bs-interval="2000">
					<img src="../assets/tempPics/wp5.jpg" class="h-100 w-100" alt="picN5" style="object-fit: cover;"/>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</template>

<script></script>

<style>
	.carousel-control-next, .carousel-control-prev {
		z-index: 0;
	}

	.carousel-item {
		height: 100%;
		width: 100%;
	}

</style>
