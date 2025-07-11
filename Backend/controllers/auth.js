const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// registerUser

 const registerUser = async (req, res) => {
    const newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        age: req.body.age,
        country: req.body.country,
        address: req.body.address,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Login User

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("Vous n'avez pas de compte");
        }

        const hashedPassword = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Mot de passe incorrect");
        }

        const { password, ...info } = user._doc;

        const accessToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SEC,
            { expiresIn: '10d' }
        );

        res.status(200).json({ ...info, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
};

//  EXPORTS (compatible CommonJS)
module.exports = { registerUser, loginUser };
