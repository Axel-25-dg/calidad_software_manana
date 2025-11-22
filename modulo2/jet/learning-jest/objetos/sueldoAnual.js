function sueldoAnual(empleado) {
    if (!empleado || typeof empleado !== 'object') {
        throw new TypeError("Empleado inválido");
    }

    const { sueldoMensual } = empleado;

    if (
        typeof sueldoMensual !== 'number' ||
        sueldoMensual <= 0
    ) {
        throw new TypeError("Sueldo mensual inválido");
    }

    return sueldoMensual * 12;
}

module.exports = { sueldoAnual };