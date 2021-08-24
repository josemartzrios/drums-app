'strict mode'

// Creo un evento incluyendo una función cuando se toque el teclado
function playSound(e){ 

    // 1. Accedo al DOM del audio (querySelector)
    // 2. Recojo con la const audio el evento con el keyCode para obtener el número de tecla oprimida
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // 7. Recojo el dato key, para saber que tecla presione y realizar la animación
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    // 3. Si no hay un audio (la tecla con un audio que oprimi) entonces termina la función
    // 4. Return = termina la función
    if(!audio) return;

    // 5. reproducimos el audio con la función incluida '.play()'
    /* 6. Para reproducir el audio en varias ocasiones seguidas y evitar que 
        se reproduzca una sola vez en varios segundos usamos currentTime en 0 */
    audio.currentTime = 0;
    audio.play();

    // 8. Agrego la clase playing (que configuré en CSS) para la animación de la tecla
    key.classList.add('playing');

    
};

// 11. Creo la función para remover las transiciones de los keys
function removeTransition(e){
    
    // 12. Si la propiedad propertyName del evento es diferente a transform
    if(e.propertyName !== 'transform') return 

    // 13.elimina la transicion 
    this.classList.remove('playing');
};


// 9.  Guardo las keys en un array accediendo al DOM
const keys = document.querySelectorAll('.key');

// 10. Recorro el array para que cuando la transicion termine, las elimine

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// evento del teclado y sumo la función playSound
window.addEventListener('keydown', playSound);