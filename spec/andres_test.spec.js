var principal = require('../principal/principal');

describe('Mi test', () => {
    it('Flujo 8', () => {
        var resultado = principal.calculadora('r', 'g', '*');
        expect(resultado).toBe('Deben de ser numeros');
    });

    it('Flujo 9', () => {
        var resultado = principal.calculadora(-15, 3, '/');
        expect(resultado).toBe(-5);
    });

    it('Flujo 10', () => {
        var resultado = principal.calculadora(-15, -3, '/');
        expect(resultado).toBe(5);
    });
    it('Flujo 11', () => {
        var resultado = principal.calculadora(-3, 0, '/');
        expect(resultado).toBe('No se permite division por cero');
    });

    it('Flujo 12', () => {
        var resultado = principal.calculadora(0, 5, '/');
        expect(resultado).toBe(0);
    });
});