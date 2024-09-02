import datos from "@/assets/datos.json";
import router from "@/Router";

//Funciones de uso general
function toInicio() {
	router.push("/");
}
function toMenu() {
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

export default {
	toInicio,
	toMenu,
	toContacto,
	toWp,
	toMap
}