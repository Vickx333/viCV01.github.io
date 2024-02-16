let btnAcercade = document.querySelector('#btnAcercade');

let contentAcercade = '../js/components/acercade.html';
fetch(contentAcercade)
     .then(response => response.text())
     .then(data => {
          btnAcercade.addEventListener('click', () => {
               let contenedor2 = document.querySelector('#container2');
               contenedor2.innerHTML = data;

          })
     })
     .catch(error => alert('error en la buscqueda'))
