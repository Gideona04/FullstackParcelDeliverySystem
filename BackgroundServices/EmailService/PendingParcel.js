const ejs = require('ejs');
const dotenv = require('dotenv');
const { sendMail } = require('../helpers/sendmail');
const Parcel = require('../models/parcel');

dotenv.config();

// Fonction pour rendre un template EJS avec promesse
const renderTemplate = (path, data) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(path, data, (err, html) => {
            if (err) reject(err);
            else resolve(html);
        });
    });
};

const SendParcelPendingEmail = async () => {
    const parcels = await Parcel.find({ status: 0 });

    console.log(`⏳ Vérification des colis en attente... (${parcels.length})`);

    if (parcels.length > 0) {
        for (let parcel of parcels) {
            const templateData = {
                sendername: parcel.sendername,
                from: parcel.from,
                to: parcel.to,
                recipientname: parcel.recipiantname,
                cost: parcel.cost,
                weight: parcel.weight,
                note: parcel.note
            };

            try {
                // 🔹 Mail pour l'expéditeur
                const htmlToSender = await renderTemplate("templates/pendingparcel.ejs", templateData);

                await sendMail({
                    from: process.env.EMAIL,
                    to: parcel.senderemail,
                    subject: "📦 Your parcel is being processed",
                    html: htmlToSender
                });
                console.log(`📨 Email envoyé à l'expéditeur : ${parcel.senderemail}`);

                // 🔹 Mail pour le destinataire
                const htmlToRecipient = await renderTemplate("templates/pendingparcel.ejs", templateData);

                await sendMail({
                    from: process.env.EMAIL,
                    to: parcel.recipiantemail,
                    subject: "📬 You've got a parcel",
                    html: htmlToRecipient
                });
                console.log(`📨 Email envoyé au destinataire : ${parcel.recipiantemail}`);

                // 🔹 Mise à jour du statut du colis
                await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
                console.log(`✅ Statut du colis mis à jour pour ${parcel._id}`);

            } catch (error) {
                console.error(`❌ Erreur lors du traitement du colis ${parcel._id}:`, error);
            }
        }
    } else {
        console.log("ℹ️ Aucun colis en attente trouvé.");
    }
};

module.exports = { SendParcelPendingEmail };
