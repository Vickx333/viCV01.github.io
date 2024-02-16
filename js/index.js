



let btncontacto = document.getElementById('btncontacto');
// console.log(btncontacto);

let container2 = document.getElementById('container2');

// console.log(container2)


function invertir() {
  // alert("aplicar alores o cambios");
  let cuerpoCompleto = document.querySelector('div');
  cuerpoCompleto.style.filter = 'invert(1)';
  cuerpoCompleto.style.color = 'red';
  document.querySelector('p').style.color = 'green';
  let foto1 = document.querySelector('.fotoimg');


}




/*
<!-- <div class="formacion">
<h2>CARRERA <span><img class="carreraicon" src="css/assets/free.svg" alt=""></span></h2>

<H3 class="grados">LIC EN DISEÑO Y DESARROLLO WEB</H3>
<h3 class="grados">DOCENTE DISEÑO Y MAQUETACIÓN WEB</h3>
<hr>

<div class="escuela">
  <h3>universidad tres culturas</h3>
  <ul>
    <li>
      liccenciatura en diseño y desarrollo web
    </li>
    <h3>Centro de capacitaci'on Albert Einstein</h3>
    <li>docenccia</li>
    <li>desarrollo de sitio web</li>
    <li>sinta de generacion de sertificados</li>
    <li>analista de datos</li>
    <h3>Free lance</h3>
    <li>
      <h4>MANDALA TATTOO:</h4> diseño y desarrollo landing page
    </li>
    <li>
      <h4>Farmacias San lorenzo:</h4>
      diseño desarrollo sitio web y base de datos de productos
    </li>

  </ul>

</div>
<hr>
<p class="presentacion1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus, modi
  sit facilis dicta cupiditate alias. Tempore aut, odit adipisci asperiores, dignissimos ipsa quasi tenetur
  possimus est, at eos explicabo necessitatibus dolore quos repudiandae molestias! Laboriosam dolorum omnis illum
  quidem non aliquid eum porro repudiandae accusamus ut? Amet dolore voluptas odio provident dicta ullam. Tenetur,
  unde magni dolor ipsam voluptatem minima in facere eius a corrupti doloribus saepe maxime obcaecati. Blanditiis
  minima similique eaque reiciendis quia harum. Cumque, eius sunt? Natus quisquam, fugiat, deleniti explicabo
  harum itaque doloribus praesentium similique earum perspiciatis voluptate sint possimus illo obcaecati assumenda
  impedit repudiandae, facere officia optio accusantium dolores accusamus amet rerum odio. Illo, in error eaque
  similique blanditiis doloremque iste provident, odio, placeat consequatur est iure nihil! Esse recusandae
  sapiente, optio dolorum quas omnis sit quidem obcaecati molestias non accusantium minima maiores amet illo ipsam
  temporibus saepe perspiciatis impedit explicabo voluptate, maxime itaque.</p>

</div> -->

*/

// click en foto.
let foto1 = document.querySelector('#fotoPerfil');
foto1.addEventListener('click', () => {
  clickEenFoto();
});
let nombre001 = document.querySelector('#nombre');
nombre001.addEventListener('click', clickEenFoto)

function clickEenFoto() {
  location.href = '/'
};

