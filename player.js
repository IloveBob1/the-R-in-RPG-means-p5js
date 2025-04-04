function Player(x, y) {
  this.x = x;
  this.y = y;
  this.breath = 100;
  this.underwater = false
  
  this.draw = function() {
    fill(255);
    ellipse(this.x*SCL, this.y*SCL, SCL, SCL);
    
    if (this.underwater || this.breath < 100) {
      fill(18, 96, 128);
      rect(this.x*SCL-25, this.y*SCL-25, 50, 15)
      fill(184, 235, 255);
      rect(this.x*SCL-25, this.y*SCL-25, this.breath/2, 15)
    }
  }
  
  this.update = function() {
    // movement
    if (frameCount % 10 == 0) {
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        this.y -= 1
      }
      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        this.y += 1
      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x += 1
      }
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x -= 1
      }
    }
    
    if (this.x < 0) {
      this.x = int(width/SCL)-1
      back.offset_x -= 1
      back.setData()
    } else if (this.x > int(width/SCL)-1) {
      this.x = 0
      back.offset_x -= 1
      back.setData()
    } else if (this.y < 0) {
      this.y = int(height/SCL)-1
      back.offset_y -= 1
      back.setData()
    } else if (this.y > int(width/SCL)-1) {
      this.y = 0
      back.offset_y += 1
      back.setData()
    }
      
    if (back.data[this.y][this.x] < -0.25) {
      this.underwater = true
      this.breath -= 1/2
    } else {
      this.underwater = false
    }
      
    if (this.breath < 100 && !this.underwater) {
      this.breath += 1;
    }
      
    if (this.breath <= 0) {
      gameOver = true;
    }
  }
}
