const mongoose = require('mongoose')
const multer = require('multer')
var base64 = require('base-64')
const measurementSchema = new mongoose.Schema( {
        plantID:{
            type: String,
            required: true
        },
        /*
        measureId: {
            type: String,
            required: true
        },
        */
       temperature: {
        type: String,
        required: true
    },


        airHumidity: {
            type: String,
            required: true
        },
        drySoil: {
            type: String,
            required: true
        },
        tempWarning: {
            type: String
        },
        dateTime: {
            type: String,
            required: true
        },
       
})


module.exports = mongoose.model("measurements", measurementSchema)