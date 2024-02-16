let widthBody = window.innerWidth;

function tamañoCel(widthBody) {
  let ht = document.querySelector('html');
  ht.style.scrollBehavior = 'smooth'
  //body 
  let body = document.querySelector('body');
  body.innerHTML = '';
  body.style.display = 'block';
  body.style.padding = '0';



  let navegador = document.createElement('nav');
  navegador.className = 'navegador navResponsive';
  navegador.style.width = '100%';
  navegador.style.height = '50px';
  // navegador.style.backgroundColor = 'red';
  navegador.innerHTML = (`
     <a class="ctaNav" href="">inicio</a>
     <a class="ctaNav" href="#carreraContainer">carrera</a>
     <a class="ctaNav" href="#contentTecnos">tecnologias</a>
     <a class="ctaNav" href="">Portfolio</a>
     `)
  body.appendChild(navegador);

  //header header header
  let headerResponsive = document.createElement('header');
  headerResponsive.className = 'headerResponsive';

  let fotoHeader = document.createElement('div');
  fotoHeader.className = 'fotoContainer';


  //imagen foto imagen foto
  let imgFoto = document.createElement('img');
  imgFoto.className = 'footoperfil';
  imgFoto.alt = 'fotoyo';
  imgFoto.src = './css/img/face-card-bootom-left-green.png';
  fotoHeader.appendChild(imgFoto);

  headerResponsive.appendChild(fotoHeader);


  let nombre = document.createElement('h1');
  nombre.className = 'nombre001'
  nombre.innerText = 'VICTOR PEREZ JIMENEZ';
  headerResponsive.appendChild(nombre);


  body.appendChild(headerResponsive);


  console.log(document.querySelector('head'))

  let carreraContainer = document.createElement('section');
  carreraContainer.className = 'carreraContainer';
  carreraContainer.id = 'carreraContainer';
  carreraContainer.innerHTML = (`
     <div class="formacion center">
      <h2 class="tituloFormacion">CARRERA <span><img class="carreraicon" src="css/assets/free.svg" alt=""></span></h2>

      <h3 class="grados center">LIC. EN DISEÑO Y DESARROLLO WEB</h3>
      <h3 class="grados center">DOCENTE DISEÑO Y MAQUETACIÓN WEB</h3>
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
  document.addEventListener('scroll', () => {
    let scrol = window.scrollY;
    // console.log(scrol);
    if (scrol > 50) {
      navegador.classList.add('navFixed');

    } else {
      navegador.classList.remove('navFixed');
    }
  });

  body.appendChild(carreraContainer);


  let tecnologiasContaineer = document.createElement('section');
  tecnologiasContaineer.className = 'tecnoContainer';
  tecnologiasContaineer.id = 'contentTecnos';

  tecnologiasContaineer.innerHTML = (`
     <h2 class="tituloTecno">Tecnologias</h2>
     <div class="gridContainerResponsive">
      <div class="griditem" id="g1">
        <img class="" src="css/assets/html-5.png" alt="">
      </div>
      <div class="griditem" id="g2">
        <img class="" src="css/assets/css-3.png" alt="">
      </div>
      <div class="griditem" id="g3">
        <img class="" src="css/assets/js.png" alt="">
      </div>
      <div class="griditem" id="g4">
        <img class="" src="css/assets/reactjs.png" alt="">
      </div>
      <div class="griditem" id="g5">
        <img class="" src="css/assets/sass.png" alt="">
      </div>
      <div class="griditem" id="g6">
        <h2>{JSON}</h2>

      </div>
      <div class="griditem" id="g7">
        <h2>MySQL</h2>
      </div>
      <div class="griditem" id="g8">
        <img class="" src="css/assets/indesign.png" alt="">

      </div>
      <div class="griditem" id="g9">
        <img class="" src="css/assets/adobe-photoshop.png" alt="">

      </div>
      <div class="griditem" id="g10">
        <img class="ilustratorimg" src="css/assets/ilustrador-adobe.png" alt="">
      </div>
      <div class="griditem" id="g11">
        <img class="" src="css/assets/manzana.png" alt="">
      </div>
      <div class="griditem" id="g12">
        <img class="" src="css/assets/ventanas.png" alt="">
      </div>

    </div>

    <div class="infotec" id="infotec">


    </div>
     `);






  //infotec infotect infotec infotec
  // let ventanaTec = document.createElement('div');
  // ventanaTec.className = 'infoTecRes';
  // body.appendChild(ventanaTec);




  body.appendChild(tecnologiasContaineer);


  let tecnologias = document.querySelectorAll('.griditem');

  console.log(tecnologias);

  tecnologias.forEach(tecnologia => {



    tecnologia.addEventListener('click', ventana);

    function ventana() {


      console.log(tecnologia.id);
      let status = true;
      if (status = true) {
        let tecno = ['html', 'css', 'js', 'Ai', 'Psd', 'React'];
        let ur = '';
        if (tecnologia.id = 'g1') {
          ur = tecno[0];
        } else if (tecnologia.id = 'g2') {
          ur = tecno[2]
        } else {
          console.log('error')
        }


        let rutaTecno = 'js/components/tecno' + ur + '.html';

        fetch(rutaTecno)
          .then(response => response.text())
          .then(data => {
            console.log(data)
            console.log(rutaTecno)

          }).catch(error => { })
      } else { status = false };


      let cerrarVentana = () => {
      };
    }
  });




























}
let cuerpo = document.querySelector('body');
if (widthBody <= 500) {

  tamañoCel(widthBody);

} else {
  widthBody = flase;
}









