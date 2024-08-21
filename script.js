// script.js

// Agrega funcionalidades interactivas si es necesario
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página cargada correctamente.');
    
    // Ejemplo: Scroll suave a las secciones
    const links = document.querySelectorAll('.nav-links a');
    
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
