document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const form = this;
    const formData = new FormData(form);
    const mensajeExito = document.getElementById("mensaje-exito");


    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {

            mensajeExito.style.display = "block";

            form.reset();

            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 5000);
        } else {
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Ocurrió un error de conexión.");
    });
});