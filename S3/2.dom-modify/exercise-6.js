const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul");

for (let i = 0; i < arrayNombres.length; i++) {
    let li$$ = document.createElement("li");
    li$$.textContent = arrayNombres[i];
    ul$$.appendChild(li$$);
  }