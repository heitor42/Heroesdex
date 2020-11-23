const { Router } = require('express');
const HeroesSearch = require('./controllers/HeroesSearchControllers');
const HeroSearch = require('./controllers/HeroSearchControllers');
const StoreSearch = require('./controllers/StoreSearchControllers');
const routes = Router();

// Busca por heróis
routes.get('/search/heroes/:name', HeroesSearch.index)
routes.get('/search/hero/:id', HeroSearch.index)
routes.get('/search/stores/:id', StoreSearch.index)


module.exports = routes
