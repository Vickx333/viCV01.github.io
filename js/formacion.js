let formacion = (`
<div class="formacion">
      <h2 class="tituloFormacion">CARRERA <span><img class="carreraicon" src="css/assets/free.svg" alt=""></span></h2>

      <h3 class="grados">LIC. EN DISEÑO Y DESARROLLO WEB</h3>
      <h3 class="grados">DOCENTE DISEÑO Y MAQUETACIÓN WEB</h3>
      <hr class="hrs">

      <div class="escuela">
        <h3>universidad tres culturas</h3>
        <ul>
          <li>
            Licenciatura en diseño y desarrollo web
          </li>
          <h2 class="experienciaL">Experiencia laborar</h2>
          <h3>Centro de capacitación Albert Einstein</h3>
          <li><h4>Docencia</h4>
          Enseñanza en tecnologías de la web <br>
          Enseñanza en diseño gráfico digital
          </li>
          <li><h4>Desarrollo de sitio web</li></li>
          <li><h4>Sistema de generación de certificados</h4></li>
          <li><h4>Analista de datos<h4></li>
          <h3>Freelancer</h3>
          <li>
            <h4>MANDALA TATTOO:</h4> Diseño y desarrollo landing page
          </li>
          <li>
            <h4>Farmacias San Lorenzo:</h4>
            Diseño, desarrollo de sitio web y base de datos de productos
          </li>

        </ul>

      </div>
      <br>
      <hr class="hrs">
      <p class="presentaciondetrabajos"> Mi experiencia en el ámbito del desarrollo web, basada en el diseño, ha cultivado habilidades que me permiten abordar problemas desde una perspectiva altamente creativa. Esta trayectoria también ha ampliado mi visión, brindándome una perspectiva más completa en la resolución de diversas problemáticas.
      <br>
      <br>

      En el actual escenario digital, donde la estética y la funcionalidad son elementos esenciales, mi capacidad para enfrentar desafíos desde una perspectiva creativa se convierte en un distintivo clave. Además, poseer una visión más amplia me facilita identificar soluciones innovadoras y eficientes para abordar cualquier problemática. <br><br>
      
      Estoy emocionado por seguir creciendo en este apasionante campo. Si tienes alguna pregunta o hay algo en lo que pueda ayudarte, no dudes en contactarme.</p>

    </div>


`);
let btnCarrera = document.getElementById('btnCarrera');

console.log(btnCarrera);
btnCarrera.addEventListener('click', () => {
  container2.innerHTML = formacion;


  //  estilos de carrera

  // let contenedorCarrera = document.querySelector('.formacion');
  container2.addEventListener('scroll', () => {
    let valorscrolConta = container2.scrollTop;
    console.log(Math.round(valorscrolConta));

  });

})