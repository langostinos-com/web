<template>
	<nav class="navbar p-2 justify-content-center bg-danger">
		<div class="rounded-3 d-md-none container flex-nowrap bg-primary" style="min-width: fit-content;">
			<img src="../assets/logotipo.png" style="height:35px" alt="Langostinos.com"/>
			<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#MenuCompacto" aria-controls="MenuCompacto">
				<img src="../assets/logo.webp" style="width: 50px" alt="logo" />
			</button>
		</div>
		<div class="rounded-3 d-none d-md-flex bg-info w-75 flex-nowrap p-1 m-auto align-items-center" role="group" 
		aria-label="botonesInicio" style="height: fit-content;">
			<img src="../assets/logo.webp" style="width: 50px" alt="logo" />
			<input type="radio" class="btn-check" name="btnradio" id="btnInicio" autocomplete="off" checked>
				<label class="btn btn-primary w-25 h-75 me-1" for="btnInicio">Inicio</label>
			<input type="radio" class="btn-check" name="btnradio" id="btnMenu" autocomplete="off">
				<label class="btn btn-primary w-25 h-75 me-1" for="btnMenu">Menu</label>
			<input type="radio" class="btn-check" name="btnradio" id="btnContacto" autocomplete="off">
				<label class="btn btn-primary w-25 h-75 me-1" for="btnContacto">Contacto</label>
			<button class="btn btn-primary w-25 rounded-pill" style="height: 50px;">¡Pide ahora!</button>
		</div>
	</nav>
	<div class="offcanvas offcanvas-end" tabindex="-1" id="MenuCompacto" aria-labelledby="MenuCompacto" >
				<div class="offcanvas-header justify-content-end">
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
				</div>
				<div class="offcanvas-body">
					<div>
						CUERPO
					</div>
				</div>
	</div>
</template>

<script></script>

<style></style>
