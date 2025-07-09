const express = require('express');
const router = express.Router();
const  CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

//REGISTRATION
router.post("/register", async(req, res) => {
 
    const newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        age: req.body.age,
        country: req.body.country,
        address: req.body.address,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    
    try {
        const User= await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }

    
});


//LOGIN
router.post("/login", async (req, res) => {
     try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.status(404).json("Vous n'avez pas de compte");
        }
        const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS); 

        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        if(originalPassword !== req.body.password) {
            return res.status(500).json("Mot de passe incorrect");
        }
        const { password, ...info } = user._doc;

        const accessToken = jwt.sign(
            {
                id: user._id, role:user.role,
            },
            process.env.JWT_SEC,
            { expiresIn: "10d" }

        )
        res.status(200).json({...info, accessToken});

     } catch (error) {
        res.status(500).json(error);
        
     }
});


module.exports = router;