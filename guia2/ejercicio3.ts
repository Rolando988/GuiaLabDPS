class empleado{
    nombre:string;
    salario:number;
    deduccionsalarial():number{
        var descuento:number;
        return this.salario*descuento;
    };
    constructor( nombre:string, salario:number){
       this.nombre=nombre;
       this.salario=salario;
    }
}