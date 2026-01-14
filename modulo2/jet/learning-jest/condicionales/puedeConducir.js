function puedeConducir(edad) {
    if (!Number.isInteger(edad) || edad < 0) 
        throw new TypeError('Edad invalida');
    return edad >= 18 ? 'si' : 'no';
}
module.exports = { puedeConducir };
