const canvas = document.getElementById("game");
const c = canvas.getContext("2d");

canvas.width = 375;
canvas.height = 500;

class Ship {
  constructor() {
    this.position = {
      x: 187.5 - 32,
      y: 450,
    };

    this.size = {
      width: 64,
      height: 32,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    const image = new Image();
    image.src = "./assets/ship.png";
    image.onload = () => {
      this.image = image;
      this.imgW = image.width;
      this.imgH = image.height;
    };
  }

  draw() {
    /*c.fillStyle = "red";

    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    ); */

    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.imgW,
      this.imgH
    );
  }

  update() {
    
    if (this.image) {  
    this.draw();
    this.position.x = this.position.x + this.velocity.x;

  }
  }
}

const ship = new Ship();


function animate() {
  requestAnimationFrame(animate);
  
   
  c.clearRect(0, 0, canvas.width, canvas.height);

  
  ship.update();
}
animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      ship.velocity.x= 2;
      

      break;
    case "ArrowLeft":
      ship.velocity.x= -2;
      break;
    case " ":
      break;
  }
});
