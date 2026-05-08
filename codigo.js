function enviar()
 {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var email = document.getElementById("Email").value;
    var mensaje = document.getElementById("Mensaje").value;

    if(nombre === "" || apellido === "" || email === "" || mensaje === "")
    {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
        return;
    }
            
    alert("Gracias por tu mensaje, " + nombre + "!");
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mensaje").value = "";
}