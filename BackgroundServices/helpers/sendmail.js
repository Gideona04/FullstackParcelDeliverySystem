const nodemail = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function createTransporter(config){
    const transporter = nodemail.createTransport(config);
    return transporter;
}

let configuration = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },  
};

const sendMail = async (messageoptions) => {
    const transporter = createTransporter(configuration);
    await transporter.verify();
    transporter.sendMail(messageoptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log( info.response);
        }

    });
};

module.exports = { sendMail, createTransporter, configuration };