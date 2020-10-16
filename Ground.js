class Ground {
    constructor(x,y,width,height){
      var options = {
      isStatic : true 
    }
    this.Ground = Bodies.Ground(x, y, width, height, options);
    this.width = width;
    this.height = height;
}
display(){
var pos =this.body.position;
GroundMode(BOTTOM);
Ground(0 , 0, this.width, this.height);
}
 
};