const campana = document.querySelector('.campana');
const badajo = document.querySelector('.badajo');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const atras = document.getElementById('atras');

// Pausar animación
pausarBtn.addEventListener('click', () => {
    campana.style.animationPlayState = 'paused';
    badajo.style.animationPlayState = 'paused';
});

// Iniciar animación
iniciarBtn.addEventListener('click', () => {
    campana.style.animationPlayState = 'running';
    badajo.style.animationPlayState = 'running';
});

// Volver atrás
atras.addEventListener('click', () => {
    window.location.href = '../../index.html';
});