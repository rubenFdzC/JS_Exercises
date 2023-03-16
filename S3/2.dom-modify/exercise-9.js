let div$$ = document.querySelectorAll('.fn-insert-here');
div$$.forEach(function(element)){
    let p$$ = document.createElement('p');
    p$$.textContent = "Voy dentro!";
    element.applechild(p$$);
}


//let div = document.getElementsByName('div$$.fn-insert-here');

