const db = require('../db/data');



const form = (req, res) => {
    res.render('form')
};

const hello = (req, res) => {
    const userName = {
        name: req.body.name
    }
    res.render('hello', req.body)
};
    




module.exports = {
    form, hello
};