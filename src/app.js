const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const routes = require('./routes/routes');





//view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//global variables
/*app.use((req, res, next) => {
    res.locals.nombre = req.body.name
    console.log(req.body.name)
    next();
});
*/



//routes
app.use(routes);



//server
app.listen(3000, () => console.log('Listening in port 3000'));