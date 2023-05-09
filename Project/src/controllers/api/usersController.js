
const db = require('../../database/models');
const { error } = require('console');
const { response } = require('express');

const controller = {
    list: async (req,res) => {
        try{
        const users = await db.User.findAll();
        const response = {
            count: users.length,
            users: users.map((user) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              detail: `http://localhost:3000/users/${user.id}`,
            })),
          };
          res.json(response);
          
        } catch (error) {
        res.send(error)
        }
    },
    getByID: async (req, res) => {
        try{
        const user = await db.User.findByPk(req.params.id);
        if(!user){
            return res.status(404).send({
                status:404,
                error:'usuario no encontrado'
                
            });
        }else{
            const response = {
                id: user.id,
                name: user.name,
                email: user.email,
              };
            res.json(response);
            }
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = controller;