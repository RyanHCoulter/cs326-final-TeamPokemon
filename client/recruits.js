import * as f from "./fetch.js";
window.onload = async () => {
<<<<<<< HEAD
    const pokemons =await Promise.all(['pikachu','geodude','mankey'].map(enemy=>f.pokeInfo(enemy)));
=======
   // const pokemons =await Promise.all(['pikachu','geodude','charmander'].map(enemy=>f.pokeInfo(enemy)));
    const pokemons =await f.getPokemon();
    console.log(pokemons);
>>>>>>> 79614efec102c8787e6ada3ebea5f2e2bda138dd
    const history = document.getElementById("history");
    history.innerHTML = '';
    pokemons.forEach(pokemon=>{
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.innerHTML = pokemon.name;
        row.appendChild(name);

        const type = document.createElement('td');
        type.innerHTML = pokemon.name;
        row.appendChild(type);

        const location = document.createElement('td');
        location.innerHTML = pokemon.name;
        row.appendChild(location);

        const btn = document.createElement('button');
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        btn.innerHTML = "Go To Dash";
        btn.onclick = ()=>{
            const prefix = window.location.href.substr(0,window.location.href.indexOf('recruits'));
            window.location.href = prefix + 'dashboard?pokemon=' + pokemon.name;
        }
        row.appendChild(btn);

        history.appendChild(row);
    })


}



