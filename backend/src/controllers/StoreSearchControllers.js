const axios = require('axios');
const handleHash = require('../utils/hash');
require('dotenv').config();

const privateKey = process.env.MY_PRIVATE_KEY;
const publicKey = process.env.MY_PUBLIC_KEY;

module.exports = {
    async index(request, response) {
        const timestamp = Date.now().toString();
        const hash = handleHash(timestamp, privateKey, publicKey);
        const id = request.params.id;

        const baseUrlToMarvelAPI = `https://gateway.marvel.com/v1/public/`;
        const marvelAPIGetHeroById = `stories/${id}`;
        const marvelAPAuthorization = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        const url = `${baseUrlToMarvelAPI}${marvelAPIGetHeroById}?${marvelAPAuthorization}`;

        const results = await axios.get(url);

        console.log(results);
        console.log(url);

        return response.json(results.data)
    }
}