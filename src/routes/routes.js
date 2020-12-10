const { Router } = require('express');
const routes = Router();

const { form, hello } = require('../controllers/controllers');


routes.get('/', form);

routes.post('/hello', hello);



module.exports = routes;