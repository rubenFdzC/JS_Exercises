let input$$ = document.querySelector('input[type="text"');
console.log(input$$);
input$$.addEventListener('focus',function(){
    const valorInput = input$$.value;
    console.log(valorInput);
})