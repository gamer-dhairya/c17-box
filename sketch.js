var box;
function setup() 
{
  createCanvas(400, 400);
  box= new Box(100,200,20,20,2,2);
}

function draw() 
{
  background(220);
  box.show();
  box.move();
  box.moveup();

}

