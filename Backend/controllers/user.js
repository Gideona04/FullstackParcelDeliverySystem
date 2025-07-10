const User = require('../models/User');

// DELETE USER
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Utilisateur supprimé avec succès");
    } catch (error) {
        res.status(500).json("Erreur lors de la suppression de l'utilisateur");
    }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Erreur lors de la récupération des utilisateurs");
    }
};

// ✅ EXPORT avec CommonJS
module.exports = {
    deleteUser,
    getAllUsers,
};

