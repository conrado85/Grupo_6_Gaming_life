const path = require('path')
const fs = require('fs')

const { error } = require('console');

//Requiero los modelos
const db = require('../database/models');

const controller = {
    index: (req, res) =>{
        res.render('home')
    },
    aboutUs: async (req,res) =>{
        try {
            const info = await db.Aboutus.findAll()
            res.render('AboutUs', {info})
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controller