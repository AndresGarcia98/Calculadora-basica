exports.calculadora = function(num1, num2, operacion) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {       
        return 'Deben de ser numeros';
    }
    else if (operacion == '+') {
        return num1 + num2;
    } else if (operacion == '-') {
        return num1 - num2;
    } else if (operacion == '*') {
        return num1 * num2;
    } else if (operacion == '/') {
        if ( num2 == 0 ){
            return 'No se permite division por cero';
        }
        return num1 / num2;
    } else
        return 'Error';

}