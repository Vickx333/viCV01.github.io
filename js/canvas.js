// alert("hola")

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// let gradient = ctx.createLinearGradient();
// gradient.addColorStop(0, 'blue');
// gradient.addColorStop(0.2, 'red');

// gradient.addColorStop(0.4, 'greenyelow');

// gradient.addColorStop(1, 'purple');


class symbol {
     constructor(x, y, fontSize, canvasHeight) {
          this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          this.x = x;
          this.y = y;
          this.fontSize = fontSize;
          this.text = ' ';
          this.canvasHeight = canvasHeight;


     }
     draw(ctx) {
          this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
          ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
          if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
               this.y = 0;

          } else {
               this.y += 1;
          }
     }
}

class Effect {
     constructor(canvasWidth, canvasHeight) {
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.fontSize = 13;
          this.columns = this.canvasWidth / this.fontSize;
          this.symbols = [];
          this.#initialize();
          // console.log(this.symbols)


     }
     #initialize() {
          for (let i = 0; i < this.columns; i++) {
               this.symbols[i] = new symbol(i, 0, this.fontSize, this.canvasHeight);
          }

     }
     resize(width, height) {
          this.canvasWidth = width;
          this.canvasHeight = height;
          this.columns = this.canvasWidth / this.fontSize;
          this.symbols = [];
          this.#initialize();
     }

}
const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 20;
const nextFrame = 1100 / fps;
let timer = 0;


function animate(timeStamp) {
     const deltaTime = timeStamp - lastTime;
     lastTime = timeStamp;
     timer += deltaTime;
     if (timer > nextFrame) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
          ctx.textAlign = 'center';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(323, 36, 28,.9)';
          ctx.font = effect.fontSize + 'px monospace';
          effect.symbols.forEach(symbol => symbol.draw(ctx));
          timer = 0;
     } else {
          timer += deltaTime;
     }

     requestAnimationFrame(animate);


}

// animate(0);
let matrix = document.querySelector('#matrix');
matrix.addEventListener('click', () => {
     animate(0);

})

window.addEventListener('resize', function () {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     effect.resize(canvas.width, canvasHeight)

});
// setTimeout(() => {
//      animate(0)
// }, 4000);

