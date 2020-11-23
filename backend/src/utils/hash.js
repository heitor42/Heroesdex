let Crypto = require('crypto-js/md5');

function handleMarvelApiHash(ts, privateKey, publicKey) {
    const timestamp = ts.toString()
    const marvelHash = Crypto(timestamp + privateKey + publicKey)

    return marvelHash.toString()
}

module.exports = handleMarvelApiHash;