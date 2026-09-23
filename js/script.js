
// ==============================
// PURA VIDA
// Interacciones básicas
// ==============================

// Mostrar solución de los casos de clientes
function mostrarSolucion(numero) {

    const solucion = document.getElementById("solucion" + numero);

    if (numero === 1) {
        solucion.textContent =
            "Revisamos la luz, el riego y las condiciones del espacio para recomendar el cuidado adecuado.";
    }

    if (numero === 2) {
        solucion.textContent =
            "Analizamos el espacio y recomendamos plantas pequeñas, verticales o de fácil mantenimiento.";
    }
}


// ==============================
// BOTONES DE CONTACTO
// ==============================

const botonesContacto = document.querySelectorAll(
    '#contacto .btn'
);

botonesContacto.forEach(function(boton) {

    boton.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Gracias por contactar a PURA VIDA 🌿\n\n" +
            "Pronto podremos ayudarte a darle más vida a tu espacio."
        );

    });

});


// Abrir y cerrar el menú en pantallas pequeñas
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', function() {
        header.classList.toggle('header-scrolled', window.scrollY > 24);
    }, { passive: true });
}

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
        const menuAbierto = menu.classList.toggle('menu-abierto');

        menuToggle.classList.toggle('active', menuAbierto);
        menuToggle.setAttribute('aria-expanded', menuAbierto);
        menuToggle.setAttribute('aria-label', menuAbierto ? 'Cerrar menú' : 'Abrir menú');
    });

    menu.querySelectorAll('a').forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            menu.classList.remove('menu-abierto');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });
}

