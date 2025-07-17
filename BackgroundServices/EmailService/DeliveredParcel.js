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

const SendParcelDeliveredParcel = async () => {
    const parcels = await Parcel.find({ status: 2 });

    console.log(`📦 Colis livrés trouvés : ${parcels.length}`);

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
                // 🔸 Mail pour l'expéditeur
                const htmlToSender = await renderTemplate("templates/deliveredparcel.ejs", templateData);

                await sendMail({
                    from: process.env.EMAIL,
                    to: parcel.senderemail,
                    subject: "📦 Your parcel has been delivered",
                    html: htmlToSender
                });

                console.log(`📤 Email envoyé à l'expéditeur : ${parcel.senderemail}`);

                // 🔸 Mail pour le destinataire
                const htmlToRecipient = await renderTemplate("templates/deliveredparcel.ejs", templateData);

                await sendMail({
                    from: process.env.EMAIL,
                    to: parcel.recipiantemail,
                    subject: "📬 You've received your parcel",
                    html: htmlToRecipient
                });

                console.log(`📥 Email envoyé au destinataire : ${parcel.recipiantemail}`);

                // 🔄 Mise à jour du statut (de 2 à 3 pour éviter répétition)
                await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3 } });
                console.log(`✅ Statut du colis mis à jour (livré) pour ID : ${parcel._id}`);

            } catch (error) {
                console.error(`❌ Erreur lors du traitement du colis ${parcel._id}:`, error);
            }
        }
    } else {
        console.log("ℹ️ Aucun colis livré à notifier.");
    }
};

module.exports = { SendParcelDeliveredParcel };
