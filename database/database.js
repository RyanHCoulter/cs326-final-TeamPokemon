
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
// If you use MongoDB, you will typically have two URLs. You can then use:
// const url = (process.env.NODE_ENV === "production") ? "MongoDB Atlas URL" : "localhost URL";
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
 
async function addPokemon(imageurl, type, name,location,abilities,evolution,enemies) {
    createtable();
    return await connectAndRun(db => db.none("INSERT INTO pokemon VALUES ($1, $2, $3, $4, $5, $6, $7);", [imageurl, type, name,location,abilities,evolution,enemies]));
}
async function getPokemon(name) {
    let promise=await connectAndRun(db => db.one("select * from pokemon where name=$1;",name));
    arr[recent]=promise;
    recent=(recent+1)%10;
    return promise;
}
async function getRecent() {
    return arr;
}
