const path = require('path')
const fs = require('fs')


const controller = {
    index: (req, res) =>{
        res.render('home')
    }
}

module.exports = controller