const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copiaColors = [...colors];
copiaColors.splice(2,1);
console.log(copiaColors);