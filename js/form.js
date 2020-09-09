document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573105010573";

  let nombre = document.querySelector("#nombre").value;
  let ficha = document.querySelector("#ficha").value;
  let Depto_Base = document.querySelector("#C_Base").value;
  let Desc_Base = document.querySelector("#Desc_Base").value;
  let categoria = document.querySelector("#categoria").value;
  let Depto_Asc = document.querySelector("#C_Asc").value;
  let Desc_Asc = document.querySelector("#Desc_Asc");
  let Fecha1 = document.querySelector("#Fecha1");
  let Fecha2 = document.querySelector("#Fecha2");
  let Clausula = document.querySelector("#Clausula");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*PERMISO*%0A
		*Nombre:*%0A
    ${nombre}%0A
    *Ficha:*%0A
		${ficha}%0A
		*Categoria Base*%0A
		${categoria}%0A
		*Clausula*%0A
		${Clausula}%0A
    *Depto Base*%0A
    ${Depto_Base}%0A
		*Desc. Base*%0A
    ${Desc_Base}%0A
    *Depto Asc.*%0A
    ${Depto_Asc}%0A
		*Desc. Asc*%0A
    ${Desc_Asc}%0A
    *Lapso*%0A
    ${Fecha1} *a* ${Fecha2}%0A`;


  if (nombre === "" || ficha === "" || Clausula === "Selecciona Tipo de Permiso") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado el permiso de, ${nombre}`;

  window.open(url);
});
