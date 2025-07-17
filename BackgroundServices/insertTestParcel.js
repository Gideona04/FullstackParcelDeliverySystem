const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Parcel = require("./models/parcel");

dotenv.config();

mongoose.connect(process.env.DB)
    .then(() => {
        console.log("✅ Connexion à la DB réussie");
        insertTestParcel();
    })
    .catch((err) => console.log("❌ Erreur connexion DB :", err));

const insertTestParcel = async () => {
    try {
        const testParcel = new Parcel({
            sendername: "Gona",
            senderemail: "niavoguideon01@gmail.com",         // ✔️ Test email
            recipiantname: "Gonadelo",                 // ✔️ Corrigé
            recipiantemail: "niavonambinitsoa@gmail.com",    // ✔️ Corrigé
            from: "Fianarantsoa",
            to: "Tamatave",
            weight: 3,                                   // ✔️ Nombre, pas "3kg"
            cost: 15000,
            note: "Livrer entre 11h et 12h",
            status: 0,
            date: new Date()                             // ✔️ Ajouté le champ requis
        });

        await testParcel.save();
        console.log("✅ Colis de test inséré !");
        process.exit();
    } catch (error) {
        console.log("❌ Erreur insertion colis :", error);
    }
};
