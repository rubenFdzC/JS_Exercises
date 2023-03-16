const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
// primero hacer las var para almacenar en los loops 
let totalVolume = 0;
let numSounds = 0;

//utilizar for of y un for each anidado dentro , of mejor para iterar el arreglo y el in para para los sonido favoritos dentro . 
for (const user of users) {
    const favoriteSounds = user.favoritesSounds;
    for (const sound in favoriteSounds) {
        totalVolume += favoriteSounds[sound].volume;
        numSounds++;
    }
}
const averageVolume = totalVolume / numSounds;
consolo