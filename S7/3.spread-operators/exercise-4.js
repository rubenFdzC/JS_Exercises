const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const UltimateToyUpdate = {...toyUpdate , ...toy};
console.log(UltimateToyUpdate);

// El orden de las variables altera el orden 