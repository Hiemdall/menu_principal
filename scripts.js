document.addEventListener('DOMContentLoaded', () => {
    // Activar tooltips de Bootstrap, si los estás usando
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Cargar descripciones desde JSON
    fetch('descripciones.json') // Cambia 'descripciones.json' por el nombre correcto de tu archivo JSON
        .then(response => response.json())
        .then(data => {
            // Añadir un evento de clic a cada tarjeta que abre un modal
            document.querySelectorAll('.card[data-bs-toggle="modal"]').forEach(card => {
                card.addEventListener('click', () => {
                    const sistemaId = card.getAttribute('data-sistema-id');
                    const modalId = card.getAttribute('data-bs-target');
                    const modal = new bootstrap.Modal(document.querySelector(modalId));
                    
                     // Cambiar el texto del modal con la descripción del sistema desde el JSON
                    const descripcionSistema = data[sistemaId].descripcion;
                    const modalBody = document.querySelector(modalId + ' .modal-body');
                    const descripcionElement = modalBody.querySelector('#descripcion-sistema');
                    descripcionElement.textContent = descripcionSistema;

                    modal.show();
                });
            });
        });
});




function redireccionarAIndex() {
    window.location.href = 'index.html';
}