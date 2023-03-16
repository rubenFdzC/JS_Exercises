const userAnwsers = [];

const confirmExample = (description) => {
     return confirm(description);
}

const promptExample = (description) => {
   return propmt(description);
}

const father = (description , callBack ) => {
userAnwsers.push(callBack(description));
}
father("Hola tio ", confirmExample);
father("soy un prompt", promptExample);
// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');