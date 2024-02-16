let formulario = (`
<h2 class="saludo">Hola, mucho gusto! </h2>
    <p class="mandacarta">puedes enviarme unmensaje o un correo electronico</p> 
    <div class="redes">
        <ul>
          <li><a class="ctaicon" href="">
              <img class="inkedin intext" src="css/img/iconosredes/ikedinIcontext.svg" alt="">
              <img class="inkedin aro  vuelta" src="css/img/iconosredes/ikedinAro.svg" alt="">
            </a></li>
          <li><a class="ctaicon" href="">
              <img class="inkedin intext" src="css/img/iconosredes/faceText.svg" alt="">
              <img class="inkedin aro vuelta vuelta2 " src="css/img/iconosredes/ikedinAro.svg" alt="">
            </a></li>
          <li><a class="ctaicon ctaInsta" href="">
              <img class="inkedin vuelta" src="css/img/iconosredes/aroinsta.svg" alt="">
              <img class="inkedin intext" src="css/img/iconosredes/instatext.svg" alt="">

            </a>

          </li>
          <li><a class="ctaicon" href="">
              <img class="inkedin vuelta vuelta2" src="css/img/iconosredes/arowhats.svg" alt="">
              <img class="inkedin intext" src="css/img/iconosredes/watext.svg" alt="">

            </a></li>

        </ul>

      </div>


<form action="" class="formulario" id="formularioid">
<h3 class="ncarta">mandar una carta</h3>
<br>

<div class="nomNum">
  <label for="">nombre:</label>
  <input class="inNombre" type="text" name="" id="dataNombre" placeholder="nombre">
  <label class="inNumero" for="">numero telefonoco:</label>
  <input type="number" placeholder="telefono" id="dataNtel">
</div>
<br>
<label class="inemail" for="">Email: </label>
<input type="email" name="" id="dataEmail" placeholder="email">
<br><br>
<label for="">motivo: </label>
<br>


<select class="select" name="" id="dataMotivo">
  <option value="default">selecciona un area</option>
  <option value="developerWeb">DEVELOPER WEB</option>
  <option value="tattoo">TATTOO</option>
  <option value="arte">ART AND DESIGN</option>
</select>
<br>
<br>
<label for="">deja un comentario</label>
<br>
<textarea name="" id="textarea" cols="30" placeholder="deja un comentario..." rows="10"></textarea>
<br>
<br>
<input type="submit" value="Enviar">
</form>`);



btncontacto.addEventListener('click', () => {
  container2.innerHTML = formulario;

  if (container2.innerHTML = formulario) {
    let Eformulario = document.getElementById('formularioid');
    // console.log(Eformulario);

    Eformulario.addEventListener('submit', (e) => {
      e.preventDefault();
      let dataNombre = document.querySelector('#dataNombre').value;
      let dataNtel = document.querySelector('#dataNtel').value;
      let dataEmail = document.querySelector('#dataEmail').value;
      let dataMotivo = document.querySelector('#dataMotivo').value;




      console.log(dataNombre, dataNtel, dataEmail, dataMotivo)
      console.log('formulario enviado');
    })
  }

});






