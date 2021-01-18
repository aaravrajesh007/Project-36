class Food{
    constructor(){
        this.foodStock=0;;
        this.lastFed;
      this.image=loadImage("images/Milk .png")
      
    }
      getFoodStock(){
        return this.foodStock;
      }

      updateFoodStock(FS){
        this.foodStock=FS;
      }

      getFedTime(LF){
        this.lastFed=LF
      }
      display(){
          var x=50;
          var y=50;
          imageMode(CENTER);
          if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
              if(i%10===0){
                x=50;
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
            }
          } 
      }
}