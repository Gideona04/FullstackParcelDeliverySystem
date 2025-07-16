const mongoose = require('mongoose');

const ParcelShema = new mongoose.Schema({

    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    sendername: {
        type: String,
        required: true
    },
    recipiantname: {
        type: String,
        required: true
    },
    senderemail: {
        type: String,
        required: true
    },
    recipiantemail: {
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    note:{
        type: String,
    },
    feedback:{
        type: String,
    },
    status: {
        type: Number,
        default: 0
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Parcel', ParcelShema);