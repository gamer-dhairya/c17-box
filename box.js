class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x=x;
      this.y=y;
      this.width=w;
      this.height=h;
      this.vx=vx; 
      this.vy=vy;   
    }

    show(){
      rect(this.x,this.y,this.width,this.height);
    }
    
    move(){
      this.x=this.x+this.vx;
    
    }
    moveup(){
      this.y=this.y-this.vy;
    }

  }

  
