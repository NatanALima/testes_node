const userModel = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        users.length > 0 ? res.status(200).json(users) : res.status(200).send('Coleção Vazia!');

    } catch(err) {
        res.status(500).send(err.message);
        
    }
    
}

exports.getOneUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(200).json(user);

    } catch(err) {
        res.status(500).send(err.message);

    }
}

exports.insertOneUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    
    } catch(err) {
        res.status(500).send(err.message);
    }
    
}

exports.insertManyUser = async (req, res) => {
    try {
        const user = await userModel.insertMany(req.body);
        res.status(201).json(user);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.updateByIdUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(user);

    } catch(err) {
        res.status(500).send(err.message);
    }
}