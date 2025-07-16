const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CryptoJs = require('crypto-js');


// Charger les variables d'environnement
dotenv.config();


// Connexion à MongoDB
mongoose.connect(process.env.DB)
  .then(() => console.log("✅ Connexion à la DB réussie"))
  .catch((err) => console.error("❌ Erreur de connexion :", err));

// Définir le schéma User (ou importer depuis models/user.js si déjà existant)
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  country: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Number, default: 0 },
  role: { type: String, default: 'user' }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// Créer l'utilisateur test
const insertUser = async () => {
  const encryptedPassword = CryptoJs.AES.encrypt("12345678", process.env.PASS).toString();

  const newUser = new User({
    fullName: "Test User",
    email: "niavoguideon01@gmail.com",
    age: 24,
    country: "Madagascar",
    address: "Antananarivo",
    password: encryptedPassword,
    status: 0
  });

  try {
    await newUser.save();
    console.log("✅ Utilisateur inséré avec succès !");
    process.exit();
  } catch (error) {
    console.error("❌ Échec d'insertion :", error);
    process.exit(1);
  }
};

insertUser();
// Pour exécuter ce script, utilisez la commande :