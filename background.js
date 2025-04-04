function Background() {
  this.offset_x = 0
  this.offset_y = 0
  this.data = []
  
  this.getCol = function(val) {
    if (val < -0.5) {
      return color(11, 55, 158)
    } else if (val < -0.25) {
      return color(105, 210, 255)
    } else if (val < 0) {
      return color(227, 191, 107)
    } else if (val < 0.25) {
      return color(46, 158, 50)
    } else if (val < 0.5) {
      return color(103, 103, 103)
    } else if (val < 0.75) {
      return color(33, 33, 33)
    } else if (val <= 1) {
      return color(200, 200, 200)
    }
  }
  
  this.setData = function() {
    this.data = []
    for (let y = 0; y < int(height/SCL); y++) {
      let sub = []
      for (let x = 0; x < int(width/SCL); x++) {
        noise_x = this.offset_x * int(width/SCL) * 0.05 + x * 0.05
        noise_y = this.offset_y * int(height/SCL) * 0.05 + y * 0.05
        sub.push(map(noise(noise_x, noise_y), 0, 1, -1, 1))
      }
      this.data.push(sub)
    }
  }
  
  this.draw = function() {
    for (let y = 0; y < this.data.length; y++) {
      for (let x = 0; x < this.data[y].length; x++) {
        fill(this.getCol(this.data[y][x]))
        rect(x*SCL, y*SCL, SCL, SCL);
      }
    }
  }
}
