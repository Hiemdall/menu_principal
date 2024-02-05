document.addEventListener('DOMContentLoaded', () => {
    // Cargar estados de las estrellas desde JSON al cargar la página
    fetch('./js/descripciones.json') // Cambia 'estado.json' por el nombre correcto de tu archivo JSON
        .then(response => response.json())
        .then(data => {
            // Añadir un evento de clic a cada tarjeta que abre un modal
            document.querySelectorAll('.card[data-bs-toggle="modal"]').forEach(card => {
                const sistemaId = card.getAttribute('data-sistema-id');
                const estrella = card.querySelector('.estado-programa i');
                const estrellaLlena = data[sistemaId].estrella_llena;

                // Verificar el estado de la estrella desde el JSON y establecer el color
                if (estrellaLlena) {
                    estrella.classList.remove('far');
                    estrella.classList.add('fas');
                    estrella.classList.add('active-star');
                    estrella.style.color = 'yellow'; // Cambiar el color a amarillo 
                    
                } else {
                    estrella.classList.remove('fas');
                    estrella.classList.add('far');
                    estrella.style.color = 'gray'; // Cambiar el color a gris
                }

                // Añadir evento de clic que abre el modal
                card.addEventListener('click', () => {
                    const modalId = card.getAttribute('data-bs-target');
                    const modal = new bootstrap.Modal(document.querySelector(modalId));
                    modal.show();
                });
            });
        });
});