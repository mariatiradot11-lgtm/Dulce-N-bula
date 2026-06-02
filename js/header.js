// Obtener los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Función para abrir el menú
function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden'; /* Evita que se pueda hacer scroll de fondo */
}

// Función para cerrar el menú
function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto'; /* Devuelve el scroll normal */
}

// Eventos
menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Cerrar si se da click afuera