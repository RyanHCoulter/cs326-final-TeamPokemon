**Team:** Team Pokemon

**Application:** Pokemon Strategy Tool

**Discord Team Overview:**
Ryan Coulter, RyanHCoulter
Jakob Falus, MiniShark27
Yichao (Ethan) Zhang, yichaozhang99

**A brief and precise representation of APIs for you application:**

API Calls:
	POST /getInfo
	body: {pokemonName: string}
	=> Promise<pokemonEntry|{error:string}>
  
  
GET /getHistory
 => Promise(<pokemonEntry[]>)
 
 
POST /debugGetEntry (For Testing since it doesn’t add data to the database)
body: {pokemonName: string}
=> Promise<pokemonEntry|{error:string}>


GET /
	=> index.html
  
  
GET /recuits
=> Recruits.html


GET /dashboard
=> dashboard.html


**At least one set of four screenshots of your client interface with descriptions**

<img src="https://github.com/RyanHCoulter/cs326-final-TeamPokemon/blob/main/docs/StratDash_Html.png"/>

**The URL of your Heroku Application**

Link: https://cs326-final-pokemon.herokuapp.com/
