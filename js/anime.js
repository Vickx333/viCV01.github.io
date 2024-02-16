import anime from '../node_modules/animejs/lib/anime.es.js';


let foto = document.querySelector(' .fotoimg');


//grid tecnos
let gridTecnos = document.querySelectorAll('.gridContainer .griditem');
gridTecnos.forEach(element => {
     element.addEventListener('mouseover', () => {
          element.style.transform = 'scale(1.3)'
     });
     element.addEventListener('mouseout', () => {
          element.style.transform = 'scale(1)'
     })
});

let btnFooter = document.querySelectorAll('.buttonFooter');






// animaciond elos items de tecnologias
btnTecnologias.addEventListener('click', () => {

     anime({
          targets: '.gridContainer .griditem',
          scale: [
               { value: .3, easing: 'easeOutSine', duration: 400 },
               { value: 1, easing: 'easeInOutQuad', duration: 200 }

          ],
          delay: anime.stagger(100, { grid: [13, 5], from: 'center' })
     });

});

// animacion de inicio

let prenom = document.querySelector('#prenom');
anime({
     targets: prenom,
     translateX: '100%',
     duration: 2500,


     scale: 1
});

//animacion de letras dentro de una etiqueta p












