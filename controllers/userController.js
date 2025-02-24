const UserModel = require("../model/userModel");

async function getUsers(req,res){
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error){
        res.status(500).json({error: "erro ao buscar usuarios"});
    }
}

module.exports = {getUsers};