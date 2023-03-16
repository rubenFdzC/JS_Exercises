const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
// REVISAR CODIGO 
const legends = streamers.filter((streamer) => 
{
 const toReturn = streamers.gameMorePlayed.toLowerCase().includes("legends");
    if(toReturn && streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return toReturn;
})
console.log(legends);
