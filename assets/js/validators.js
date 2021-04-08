function validateForm() {
  var x = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
  if (x == "") {
    alert("Campo Email debe estar llenado");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["FNAME"].value;
  if (nombre == "") {
    alert("Campo Nombre debe estar llenado");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["LNAME"].value;
  if (nombre == "") {
    alert("Campo Apellido debe estar llenado");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["INSTITUT"].value;
  if (nombre == "") {
    alert("Campo Nombre de institución debe estar llenado");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["COUNTRY"].value;
  if (nombre == "") {
    alert("Seleccione un país");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["TYPEINST"].value;
  if (nombre == "") {
    alert("Seleccione el tipo de institución");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["ESPECIAL"].value;
  if (nombre == "") {
    alert("Seleccione su especialidad");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["DEGREE"].value;
  if (nombre == "") {
    alert("Seleccione su título profesional");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["group[378162][1]"].value;
  if (nombre == "") {
    alert("Confirme el Aviso de Privacidad");
    return false;
  }

  var nombre = document.forms["mc-embedded-subscribe-form"]["PERMISO"].value;
  if (nombre == "") {
    alert("Seleccione si desea que le enviemos información sobre actividades similares");
    return false;
  }
}
