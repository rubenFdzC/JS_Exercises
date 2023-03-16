fetch('https://api.agify.io?name=michael').then((res) => res.json()).then((data)=>{
    console.log(data);
}).catch((error) =>{
    console.log(error);
})

// Modo antiguo , utilizar async 

// const get = async () => {
//     try {
//         const respuesta = await fetch("https://api.agify.io?name=michael");
//         const res = await respuesta.json();
//         console.log(respuesta);
//     }};
