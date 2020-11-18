
var principal = require('../principal/principal');

describe('Mi test', ()=>{
    it('Flujo 1', ()=>{
        var resultado = principal.calculadora(5, 5, '+');
        expect(resultado).toBe(10);
    });

    it('Flujo 2', ()=>{
        var resultado = principal.calculadora(-3, 5, '.');
        expect(resultado).toBe('Error');
    });
    
    it('Flujo 3', ()=>{
        var resultado = principal.calculadora(3, -5, '-');
        expect(resultado).toBe(8);
    });
});


