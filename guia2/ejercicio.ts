class rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    CalcularArea():number{
        return this.DiagonalHorizontal*this.DiagonalVertical;
        
    };
    constructor(DiagonalVertical:number, DiagonalHorizontal:number){
        this.DiagonalVertical=DiagonalVertical;
        this.DiagonalHorizontal=DiagonalHorizontal;
    }
}