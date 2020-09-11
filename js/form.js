document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  
  let telefono = "524646533446";

  let nombre = document.querySelector("#nombre").value;
  let ficha = document.querySelector("#ficha").value;
  let depto_base = document.querySelector("#c_base").value;
  let desc_base = document.querySelector("#desc_base").value;
  let categoria = document.querySelector("#categoria").value;
  let depto_asc = document.querySelector("#c_asc").value;
  let desc_asc = document.querySelector("#desc_asc").value;
  let fecha1 = document.querySelector("#fecha1").value;
  let fecha2 = document.querySelector("#fecha2").value;
  let clausula = document.querySelector("#clausula").value;

  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*PERMISO*%0A
		*Nombre:*%20
    ${nombre}%0A
    *Ficha:*%20
		${ficha}%0A
		*Categoria Base:*%20
		${categoria}%0A
		*Clausula:*%20
		${clausula}%0A
    *Depto Base:*%20
    ${depto_base}%0A
		*Desc. Base:*%20
    ${desc_base}%0A
    *Depto Asc:*%20
    ${depto_asc}%0A
		*Desc. Asc:*%20
    ${desc_asc}%0A
    *Lapso:*%20
    ${fecha1} *a* ${fecha2}%0A`;


  if (nombre === "" || clausula === "Selecciona Tipo de Permiso") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado el permiso de, ${nombre}`;

  window.open(url);
});
