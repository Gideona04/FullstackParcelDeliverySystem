const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cron = require('node-cron');
const mongoose = require('mongoose');
const { sendWelcomeEmail } = require('./EmailService/WelcomeEmail');
const { SendParcelDeliveredParcel } = require('./EmailService/DeliveredParcel');
const { SendParcelPendingEmail } = require('./EmailService/PendingParcel');



dotenv.config();

//DB CONNECTION
const DB = process.env.DB;
mongoose.connect(DB).then(()=> {
    console.log("DB connected successfully");
}).catch((e) => {
    console.log(e);
});

//TASK SCHEDULER
//TASK SCHEDULER
const run = () => {
    cron.schedule('* * * * *', async () => {
        console.log("⏰ Tâche exécutée à", new Date().toLocaleString());
        await sendWelcomeEmail();
        await SendParcelDeliveredParcel();
        await SendParcelPendingEmail();
        
        
    });
};

run();




//SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backgroundservices is running on port ${PORT}`);
});