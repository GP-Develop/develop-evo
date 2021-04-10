function validateForm() {
    var x = document.forms["mc-embedded-subscribe-form"]["FNAME"].value;
    if (x == "") {
      alert("Campo Nombre debe estar llenado");
      return false;
    }
  
    var nombre = document.forms["mc-embedded-subscribe-form"]["LNAME"].value;
    if (nombre == "") {
      alert("Campo apellido debe estar llenado");
      return false;
    }
  
    var nombre = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
    if (nombre == "") {
      alert("Campo email debe estar llenado");
      return false;
    }
  
    var nombre = document.forms["mc-embedded-subscribe-form"]["MESSAGE"].value;
    if (nombre == "") {
      alert("Debe de enviar un mensaje");
      return false;
    }
}