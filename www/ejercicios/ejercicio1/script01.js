const pelota = document.querySelector('.pelota');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const atras = document.getElementById('atras');

// Pausar animación
pausarBtn.addEventListener('click', () => {
    pelota.style.animationPlayState = 'paused';
});

// Iniciar animación
iniciarBtn.addEventListener('click', () => {
    pelota.style.animationPlayState = 'running';
});

// Volver atrás
atras.addEventListener('click', () => {
    window.location.href = '../../index.html';
});