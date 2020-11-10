
export async function postPokemon(name) {
    const resp = await fetch('/getInfo', {
        method: 'POST',
        body: JSON.stringify({
            pokemonName: name
        })
    });
    if (!response.ok) {
        console.error(`An error has occured`);
    } else {
        const data = await resp.json();
        return data;
    }
};

export async function getPokemon() {
    const resp = await fetch('/getHistory');
    const data = await resp.json();
    return data;
}

export async function pokeInfo(name) {
    let obj;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ "pokemonName": name });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let a = fetch("/debugGetEntry", requestOptions)
        .then(response => response.json())
        .then(result => obj = result)
        .then((result) => {
            console.log(result);
            return result;
          })
        .catch(error => console.log('error', error));  
    
    return a;
}





