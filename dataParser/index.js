/*
*  This file is used to pull from the Spotify API
*  and populate the database
*/ 

require('dotenv').config();

const fetch = require('node-fetch');
const { getEncodedCredentials } = require('./util');

async function main(){
    let tokenRes = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${getEncodedCredentials()}`
        }
    }).then(res => res.json());
    
    let queryRes = await fetch('https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x', {
        headers: {
            "Authorization": `Bearer ${tokenRes.access_token}`
        }
    }).then(res => res.json());

    console.log(queryRes);
}

main();

