
let tecnologias = (`
<div class="gridContainer">
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


let btnTecnologias = document.querySelector('#btnTecnologias');

btnTecnologias.addEventListener('click', () => {
  container2.innerHTML = tecnologias;





  console.log('se carg');
  let iconoTec = document.querySelectorAll('.griditem');
  // iconoTec.forEach(tecnicon => {
  //   console.log(tecnicon)
  //   tecnicon.className += ' iconimado';

  // });





  function mostarText(idT) {
    fetch(idT)
      .then(response => response.text())
      .then(data => {

        infotec.innerHTML = data;

        console.log(data)


      })
      .catch(error => console.log('error'))
  }

  let infotec = document.querySelector('#infotec');
  let g1 = document.querySelector('#g1');


  g1.addEventListener('click', () => { mostarText('./js/components/tecnohtml.html') });


  document.querySelector('#g2').addEventListener('click', () => { mostarText('./js/components/tecnocss.html') });
  document.querySelector('#g3').addEventListener('click', () => { mostarText('./js/components/tecnojs.html') });
  document.querySelector('#g4').addEventListener('click', () => { mostarText('./js/components/tecnoReact.html') });
  document.querySelector('#g5').addEventListener('click', () => { mostarText('./js/components/tecnoSass.html') });
  document.querySelector('#g6').addEventListener('click', () => { mostarText('./js/components/tecnoJson.html') });
  document.querySelector('#g7').addEventListener('click', () => { mostarText('./js/components/tecnoMsql.html') });
  document.querySelector('#g8').addEventListener('click', () => { mostarText('./js/components/tecnoInd.html') });
  document.querySelector('#g9').addEventListener('click', () => { mostarText('./js/components/tecnoPsd.html') });
  document.querySelector('#g10').addEventListener('click', () => { mostarText('./js/components/tecnoAi.html') });
  document.querySelector('#g11').addEventListener('click', () => { mostarText('./js/components/tecnoMacos.html') });
  document.querySelector('#g12').addEventListener('click', () => { mostarText('./js/components/tecnowin.html') });
})


// let tecnoHtmlb = document.querySelectsor('#g1');
// tecnoHtmlb.addEventListener('click', () => {
// let infotec = document.querySelector('#infotec');
//      fetch('./js/components/tecnohtml.html')
//           .then(response => response.text())
//           .then(data => {
//                infotec.innerHTML = data;
//           })
//           .catch(error => console.log('error'));
// });


// g1.addEventListener('click', mostarText('./js/components/tecnohtml.html'));



// document.querySelector('#g3').addEventListener('click', () => { mostarText('./js/components/tecnojs.html') });
// mostarText('./js/components/tecnohtml.html');

