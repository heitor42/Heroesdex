const axios = require('axios');
const handleHash = require('../utils/hash');
require('dotenv').config();

const privateKey = process.env.MY_PRIVATE_KEY;
const publicKey = process.env.MY_PUBLIC_KEY;

module.exports = {
    async index(request, response) {
        const timestamp = Date.now().toString();
        const hash = handleHash(timestamp, privateKey, publicKey);
        const nameStartWith = request.params.name;
        const offset = request.query.offset || 0;
        const limit = request.query.limit || 10;
        const baseUrlToMarvelAPI = `https://gateway.marvel.com/v1/public/`;
        const marvelAPIListHeroes = `characters?nameStartsWith=${nameStartWith}&offset=${offset}&limit=${limit}`;
        const marvelAPAuthorization = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        const url = `${baseUrlToMarvelAPI}${marvelAPIListHeroes}&${marvelAPAuthorization}`;

        const results = await axios.get(url);

        const heroes = results.data.data.results;

        console.log(results);
        console.log(url);

        return response.json(heroes)
    }
}