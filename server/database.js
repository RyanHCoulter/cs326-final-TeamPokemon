'use strict';
const pgp = require("pg-promise")({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },

    disconnect(client) {
        console.log('Disconnected from database:', client.connectionParameters.database);
    }
});
// Local PostgreSQL credentials
const username = "postgres";
const password = "990130";
const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp(url);
var recent=0;
var arr=[];
async function connectAndRun(task) {
    let connection = null;

    try {
        connection = await db.connect();
        return await task(connection);
    } catch (e) {
        throw e;
    } finally {
        try {
            connection.done();
        } catch(ignored) {

        }
    }
}
async function createtable() {
    await connectAndRun(db => db.none("CREATE TABLE IF NOT EXISTS  pokemon(imageUrl varchar(100),type varchar(100),name varchar(100),location varchar(100),abilities varchar(100),evolution varchar(100),enemies varchar(100),primary key(name))"));
};
 
async function addPokemon(entry) {
    try{
        let imageurl=entry[imageUrl];
        let type=entry[type].join();
        let name=entry[name];
        let location=entry[location].join();
        let abilities=entry[abilities].join();
        let evolution=entry[evolutionLine].join();
        let enemies=entry[enemies].join();
        createtable();
        await connectAndRun(db => db.none("INSERT INTO pokemon VALUES ($1, $2, $3, $4, $5, $6, $7);", [imageurl, type, name,location,abilities,evolution,enemies]));
        return true;
    }
    catch(e){
        return false;
    }
}
async function getPokemon(name) {  
    try{
        let promise=await connectAndRun(db => db.one("select * from pokemon where name=$1;",name));
        promise["type"]=promise["type"].split(',');
        promise["location"]=promise["location"].split(',');
        promise["abilities"]=promise["abilities"].split(',');
        promise["evolution"]=promise["evolution"].split(',');
        promise["enemies"]=promise["enemies"].split(',');
        arr[recent]=promise;
        recent=(recent+1)%10;
        return promise;
    }
    catch(e){
        return null;
    }
}
async function deletePokemon(name){
    try{
        await connectAndRun(db => db.none("delete from pokemon where name=$1;",name));
        return true;
    }
    catch(e){
        return false;
    }
}
async function getRecents() {
    return arr;
}
module.exports={addPokemon,getPokemon,getRecents,deletePokemon};