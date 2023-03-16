let input$$ = document.querySelector('input');
function focus(event){console.log(event.target.value);}
input$$.addEventListener('focus', focus);