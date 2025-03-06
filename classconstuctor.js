// class constuctor

class gun {
    constructor(model,amo,scope,color,mag) {
        this.model=model;
        this.amo=amo;
        this.scope=scope;
        this.color=color;
        this.mag=mag;
        
    }
    aline (){console.log(` i want ${this.model} gun \n i need ${this.amo} amo \n fix the gun with ${this.scope} scope \n and fully colored by ${this.color} color \n fix ${this.mag}`)}
}
const finaloutput = new gun ("M416",5.56,"3X","BLACK","EXTERNALQUICKMAG");
finaloutput.aline();

