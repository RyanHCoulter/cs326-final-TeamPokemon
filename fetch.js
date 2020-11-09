const fetch = require("node-fetch");

async function postPokemon (name){
    const resp = await fetch ('/getInfo', {
        method: 'POST',
        body: JSON.stringify({
            pokemonName: name
        })
    });
    if (!response.ok) {
            console.error(`An error has occured`);
        }else{
            const data = await resp.json();
            return data;
        }
};


async function getPokemon(){
    const resp = await fetch ('/getHistory'); 
    const data = await resp.json(); 
    return data;
}