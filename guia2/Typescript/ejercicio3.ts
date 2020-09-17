class empleado{
    nombre:string;
    salario:number;
    deduccionSalarial():number{
        var descuento:number=2;
        return this.salario-descuento;
    };
    constructor (nombre:string, salario:number){
        this.salario=salario;
        this.nombre=nombre;
    }
}