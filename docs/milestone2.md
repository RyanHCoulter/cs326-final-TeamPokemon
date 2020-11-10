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

<img src="https://github.com/RyanHCoulter/cs326-final-TeamPokemon/blob/main/docs/geodude.png"/>

This image is the main page where the client will type in the pokemon they are looking to find. Once they search it will store the pokemon in our database which will be later grabbed when opening the history page. In addition, it will open the dash for that pokemon.

<img src="https://github.com/RyanHCoulter/cs326-final-TeamPokemon/blob/main/docs/geodude_dash.png"/>

This is the geodude dashboard that will load. It will have a variety of characteristics listed on the side as well as recruits which are good pokemon to defeat it. Each recruit will have the option to click it which will save that pokemon to the database for later view in the history as well as open up the dash for the pokemon. 

<img src="https://github.com/RyanHCoulter/cs326-final-TeamPokemon/blob/main/docs/mankey.png"/>

For exmaple, if mankey was clicked, this would load and the mankey dash and have the same options as before with geodude but now with mankey. 

<img src="https://github.com/RyanHCoulter/cs326-final-TeamPokemon/blob/main/docs/history.png"/>

This is the history page which pulls the previous pokemon that have been viewed and displays them in a table with a brief overlay of the information from the dash as well as the option to open the dash again. 

**The URL of your Heroku Application**

Link: https://cs326-final-pokemon.herokuapp.com/
