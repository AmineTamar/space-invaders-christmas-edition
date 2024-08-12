const canvas = document.getElementById("game")
const c = canvas.getContext("2d")

canvas.width=375;
canvas.height=700;


class Ship {
constructor (){

   this.position =  {
    x : 100,
    y :650 
   };

   this.size ={
    width : 25,
    height : 25

   }

   this.velocity = {
    x:0,
    y:0
   }
}

draw(){
    c.fillStyle = "red";
    c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height) 
   
}




}


const ship = new Ship();

ship.draw();

