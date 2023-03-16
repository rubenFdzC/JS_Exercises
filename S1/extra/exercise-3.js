const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
const smallMovies = [];
const mediumMovies = [];
const BigMovies = [];
for(let i = 0 ; i < movies.length ; i++){
    if(movies.durationInMinutes < 100){
        let peliculaPequeña = movies[i].name
        smallMovies.push(peliculaPequeña);
    }
    else if(movies.durationInMinutes >= 100 && movies.durationInMinutes<= 200){
        
        mediumMovies.push(movies[i].name)
    }
}
console.log(smallMovies);