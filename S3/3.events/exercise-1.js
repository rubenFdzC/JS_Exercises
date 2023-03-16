let btn$$ = document.createElement("button");
document.body.appendChild(btn$$);
btn$$.setAttribute('id' , 'btnToClick');
btn$$.addEventListener('click', clicky);
function clicky(event){
console.log(event)
}
