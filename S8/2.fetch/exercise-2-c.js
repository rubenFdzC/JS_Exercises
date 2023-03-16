const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector("input");
const buton$$ = document.querySelector("button")

const getDatos = async ( ) => {
try{
    const respuesta = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
    const respuesta2 = await respuesta.json();
    console.log(respuesta2);
 
} catch (error){
    console.log(error);
}

};
buton$$.addEventListener("click",getDatos)