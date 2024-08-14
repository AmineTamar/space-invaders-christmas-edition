const canvas = document.getElementById("game");
const c = canvas.getContext("2d");
const keys = {
  arrowRight : {
    pressed : false 
  } ,
  arrowLeft : {
    pressed : false
  }
  
}
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

    if (keys.arrowRight.pressed) {
      ship.velocity.x= 3;
    }
    else if(keys.arrowLeft.pressed) {
      
      ship.velocity.x= -3;
    }
    else {
      ship.velocity.x= 0;
    }
  

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

     keys.arrowRight.pressed = true
      
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = true

      break;
    
  }
});
addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowRight":

     keys.arrowRight.pressed = false      
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = false

      break;
    
  }
});

