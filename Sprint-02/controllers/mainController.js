const fs = require('fs');
const path = require('path');

const menuFile = fs.readFileSync(path.join(__dirname, '../models/menu.json'), 'utf-8');
const listMenu = JSON.parse(menuFile);

const controller = {
    index: (req, res) => {
        res.render('home');
    },
};

module.exports = controller;