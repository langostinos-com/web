import datos from "@/assets/datos.json";
import router from "@/Router";

//Funciones de uso general
function toInicio() {
	document.body.style.backgroundColor = "#00253E";
	document.body.style.color = "whitesmoke";
	router.push("/");
}
function toMenu() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "#00253E";
	router.push("/menu");
}
function toContacto() {
	router.push("/contacto");
}
function toWp() {
	window.open(datos.redes.whatsapp.link, "_blank");
}
function toMap() {
	window.open(datos.info.mapa, "_blank");
}
function toIg() {
	window.open(datos.redes.instagram.link, "_blank");
}
function toYt() {
	window.open(datos.redes.youtube.link, "_blank");
}
function toTiktok() {
	window.open(datos.redes.tiktok.link, "_blank");
}

export default {
	toInicio,
	toMenu,
	toContacto,
	toWp,
	toMap,
	toIg,
	toYt,
	toTiktok
}