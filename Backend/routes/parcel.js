const express = require('express');
const router = express.Router();
const {
    createParcel,
    getAllParcels,
    updateParcel,
    getOneParcel,
    getUserParcel,
    deleteParcel
} = require('../controllers/parcel');
const { verify } = require('jsonwebtoken');
const { verifyToken, verifyTokenAndAuthorization } = require('../middlewares/verifyToken');


// add parcel

router.post("/",createParcel)

// get all parcels

router.get("/",getAllParcels) 

//Update parcel

router.put("/:id",updateParcel) 

// get one parcel 

router.get("/find/:id", getOneParcel) 


// Get parcels by user

router.post("/me",getUserParcel )

// Delete parcel
router.delete("/:id", deleteParcel) 

module.exports = router;