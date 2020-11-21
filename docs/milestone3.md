**Team:** Team Pokemon

**Application:** Pokemon Strategy Tool

**Discord Team Overview:**
Ryan Coulter, RyanHCoulter
Jakob Falus, MiniShark27
Yichao (Ethan) Zhang, yichaozhang99

**Description of databse table:**

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| imageURL | String    | The URL to get the pokemon image  |
| type | String   | The pokemons type (fire, water, ground, etc) |
| name  | String    | The name of the pokemon  |
| location | Array   | Where to find the pokemon |
| abilities  | Array    | List of abilities the pokemon can have  |
| evolutions | Array   | What pokemon it evolves to (if applicable) |
| enemies  | Array    | Enemeies associated with this pokemon  |
| Primary key (name) | String   | Name as primary key |

Information stored in our database is about the pokemon that is searched for. 
We can add pokemon by name. 
Delete pokemon by name. 
Update a pokemon entry. 
Lastly it can be called to return the last 10 (or less) entries which will be shown in the history tab.


**Division of Labor:**

**Ryan:** milestone3.md file creation, database logic development and partial implementation

**Yichao:** secrets.json, database logic development and partial implementation

**Kobi:** database logic development and partial implementation
