// paginacion atraves de mouse hover

// crear la funcion de hover para cambiar a partir del hover el numero de la pagina ctual 
function mostrarTecnos() {

}
let urlJson1 = 'json/tecnologias.json';




const ccontainer = document.querySelector('#infotec');
let tecnos = document.querySelectorAll('.griditem');

let elementosPorPagina = 1;
let paginActual = 0;
// console.log(tecnos);
tecnos.forEach(tecno => {
     // console.log(tecno);
     tecno.addEventListener('mouseover', () => {
          console.log(tecno.id);
          // paginacion de una pagina dentro de un container externo
          fetch(urlJson1)
               .then(response => response.json())
               .then(data => {
                    console.log(data);
                    const totalDePaginas = Math.ceil(data.length / elementosPorPagina);
                    function showItems() {
                         const inicio = (paginActual - 1) * elementosPorPagina;
                         const fin = start + elementosPorPagina;
                         const itemsToShow = data.slice(inicio, fin);

                         ccontainer.innerHTML = "";
                         itemsToShow.forEach(Element => {
                              const card = document.createElement('div');
                              ccontainer.appendChild(card);
                              let nombre = document.createElement('h2');
                              nombre.innerText = Element.tecnombre;

                              card.appendChild(nombre)



                         })

                    }
                    showItems();


               })

     })
})






