const canvas = document.getElementById("game");
const c = canvas.getContext("2d");
const keys = {
  arrowRight: {
    pressed: false,
  },
  arrowLeft: {
    pressed: false,
  },
};
canvas.width = 375;
canvas.height = 500;
// ship class *********** 
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

//**********end ship class  */



// Projectile class
class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 3;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "red";
    c.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

// END Projectile class


// invader class ******* // 
class Invader {
  constructor() {
    this.position = {
      x: canvas.height/2,
      y: canvas.width/2,
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
    image.src = "./assets/invader1.png";
    image.onload = () => {
      this.image = image;
      this.imgW = image.width;
      this.imgH = image.height;
    };
  }

  draw() {
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
      this.position.y = this.position.y + this.velocity.y;
    }
  }
}


// end invader class******  // 

const invader = new Invader();

const projectile = [];

const santa = new Ship();


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  invader.update();
  santa.update();
  projectile.forEach((proj, i) => {
    if (proj.position.y + proj.radius <= 0) {
      setTimeout(()=> {   projectile.splice(i, 1),0.1 } )
    
    } else {
      proj.update();
    }
  });

  if (
    keys.arrowRight.pressed &&
    santa.position.x + santa.imgW <= canvas.width
  ) {
    santa.velocity.x = 3;
  } else if (keys.arrowLeft.pressed && santa.position.x >= 0) {
    santa.velocity.x = -3;
  } else {
    santa.velocity.x = 0;
  }
}
animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      keys.arrowRight.pressed = true;

      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = true;

      break;
  }
});
addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      keys.arrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.arrowLeft.pressed = false;

      break;
    case " ":
   
      projectile.push(
        new Projectile({
          position: {
            x: santa.position.x + santa.size.width / 2,
            y: santa.position.y + santa.size.height / 2,
          },
          velocity: {
            x: 0,
            y: -7,
          },
        })
      );
      break;
  }
});
