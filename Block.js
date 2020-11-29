class Block {

  constructor(x, y, width, height){

      var options = {
          'restitution': 0.4,
          'friction': 0
      }

      this.visibility = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(myworld,this.body);

  }

  display() {
    
      var pos = this.body.position;
      var angle = this.body.angle;

      console.log(this.body.speed);

      if (this.body.speed < 7) {  
        

        push();//Save current setting & transformation

            translate(pos.x,pos.y);
            rotate(angle);

            rectMode(CENTER);

            strokeWeight(1);
            stroke(53, 54, 56);
            rect(0,0,this.width,this.height);

        pop();//restore the settings
            
      } else {
        
        World.remove(myworld,this.body);

        push();

            this.visibility = this.visibility - 7;
            tint(255, this.visibility);

            if (this.visibility < 0 && this.visibility > -100) {
              score++;
            }

        pop();

      }
    }
}

