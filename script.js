// Espera a que todo el HTML esté cargado antes de ejecutar el script

document.addEventListener('DOMContentLoaded', function () {
    
    const toggleButton = document.getElementById('darkModeToggle');

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Cambia el ícono según el modo activo
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });

});