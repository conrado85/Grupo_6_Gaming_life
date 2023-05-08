const path = require('path')
const fs = require('fs')

const controller = {
    index: (req, res) =>{
        res.render('home')
    },
    aboutUs: (req,res)=>{
        res.render('aboutUs')
    }
}

module.exports = controller