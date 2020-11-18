
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
    
     it('Flujo 4', ()=>{
        var resultado = principal.calculadora(3, 5, '*');
        expect(resultado).toBe(15);
    });

    it('Flujo 5', ()=>{
        var resultado = principal.calculadora(-3, 5, '*');
        expect(resultado).toBe(-15);
    });
    
    it('Flujo 6', ()=>{
        var resultado = principal.calculadora(-3, -5, '*');
        expect(resultado).toBe(15);
    });
    it('Flujo 7', ()=>{
        var resultado = principal.calculadora(-3, 0, '*');
        expect(resultado).toBe(0);
    });
});


