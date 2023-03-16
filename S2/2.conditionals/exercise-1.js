const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let isAproved;
for(let i = 0; i < alumns.length ; i++){
    if((alumns.T1 != false && alumns.T2 != false) || (alumns.T1 != false && alumns.T3 != false)){
        alumns.push(isAproved);
    }
    
}
console.log(alumns)