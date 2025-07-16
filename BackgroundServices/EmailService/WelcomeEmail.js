const ejs = require('ejs');
const dotenv = require('dotenv');
const { sendMail } = require('../helpers/sendmail');
const User = require('../models/user');
const CryptoJs = require('crypto-js');

dotenv.config();

const sendWelcomeEmail = async () => {
    const users = await User.find({ status: 0 });

    console.log("🔍 Utilisateurs trouvés à activer :", users.length);

    if (users.length > 0) {
        for (let user of users) {
            try {
                const hashedpassword = CryptoJs.AES.decrypt(user.password, process.env.PASS);
                const originalPassword = hashedpassword.toString(CryptoJs.enc.Utf8);

                ejs.renderFile(
                    "templates/welcome.ejs",
                    { fullname: user.fullName, email: user.email, password: originalPassword },
                    async (err, html) => {
                        if (err) {
                            console.log("❌ Erreur ejs :", err);
                            return;
                        }

                        const messageOption = {
                            from: process.env.EMAIL,
                            to: user.email,
                            subject: "✅ Bienvenue sur ColisExpress",
                            html: html,
                        };

                        console.log(`📨 Envoi de l'email à : ${user.email}`);

                        try {
                            await sendMail(messageOption);
                            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
                            console.log(`✅ Email envoyé à ${user.email} et statut mis à jour`);
                        } catch (error) {
                            console.log("❌ Erreur lors de l'envoi ou de la mise à jour :", error);
                        }
                    }
                );
            } catch (e) {
                console.log("❌ Erreur de déchiffrement ou de traitement de l'utilisateur :", e);
            }
        }
    } else {
        console.log("ℹ️ Aucun nouvel utilisateur à activer.");
    }
};

module.exports = {sendWelcomeEmail};
