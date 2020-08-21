var empleado = /** @class */ (function () {
    function empleado(nombre, salario) {
        this.salario = salario;
        this.nombre = nombre;
    }
    empleado.prototype.deduccionSalarial = function () {
        var descuento = 2;
        return this.salario - descuento;
    };
    ;
    return empleado;
}());
