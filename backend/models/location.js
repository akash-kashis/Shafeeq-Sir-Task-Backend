const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});


const locationSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    locationname: {
        type: String,
        required: true
    },
    geometry: GeoSchema
});

const Locations = mongoose.model('userLocation', locationSchema);
module.exports =  Locations ;