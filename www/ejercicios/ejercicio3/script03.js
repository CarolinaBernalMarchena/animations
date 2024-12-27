const espiral = document.querySelector('.espiral');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const atras = document.getElementById('atras');

// Pausar animación
pausarBtn.addEventListener('click', () => {
    espiral.style.animationPlayState = 'paused';
});

// Iniciar animación
iniciarBtn.addEventListener('click', () => {
    espiral.style.animationPlayState = 'running';
});

// Volver atrás
atras.addEventListener('click', () => {
    window.location.href = '../../index.html';
});