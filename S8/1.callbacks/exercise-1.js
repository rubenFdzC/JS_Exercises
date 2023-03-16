const numbersList = [];

function sum(a,b){
    return a + b ;

}

function substract(a , b){
return a -b ;
}

function father(a,b, Fcallback){
const result = Fcallback(a,b);
numbersList.push(result);
}
father(4,6, sum);
father(5,9, substract);
console.log(numbersList);
