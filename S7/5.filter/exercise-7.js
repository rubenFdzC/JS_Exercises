const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];

const input$$ = document.querySelector("input")
const llamar = (event) => {
    console.log(event.target.value);
    const filtrado = streamers.filter(streamer => streamer.name.toLowerCase().includes(event.target.value))
}
input$$.addEventListener("input", llamar)