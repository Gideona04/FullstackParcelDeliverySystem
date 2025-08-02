const Parcel = require('../models/Parcel');

//CREATE PARCEL
 const createParcel = async (req, res) => {
  try {
    console.log("📦 Données reçues pour création de colis :", req.body);
    const newParcel = new Parcel(req.body);
    const savedParcel = await newParcel.save();
    res.status(201).json(savedParcel);
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout du colis :", error.message);
    res.status(500).json({ error: error.message });
  }
};

//GET ALL PARCELS
 const getAllParcels = async (req, res) => {
    try {
        const parcels = await Parcel.find().sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
}

//UPDATE PARCEL
 const updateParcel = async (req, res) => {
  try {
    const updatedParcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedParcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ONE PARCEL 
 const getOneParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        res.status(200).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
}
// Get user's parcels
 const getUserParcel = async (req, res) => {
    try {
        const parcels = await Parcel.find({ senderemail: req.body.email }).sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
}
//DELETE PARCEL
 const deleteParcel = async (req, res) => {
    try {
        await Parcel.findByIdAndDelete(req.params.id);
        res.status(200).json("Colis supprimé avec succès");
    } catch (error) {
        res.status(500).json(error);
    }
}  
module.exports = {
    createParcel,
    getAllParcels,
    updateParcel,
    getOneParcel,
    getUserParcel,
    deleteParcel
};
    