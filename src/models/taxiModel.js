const mongoose = require('mongoose');

const taxiSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    plate: { type: String, required: true },
    lat: { type: Number, required: true },
    min_lat: { type: Number },
    max_lat: { type: Number },
    lon: { type: Number, required: true },
    min_lon: { type: Number },
    max_lon: { type: Number },
    speed: { type: Number, required: true },
    max_speed: { type: Number, required: true },
    acceleration: { type: Number, required: true },
    mileage: { type: Number, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    deleted_at: { type: Date, required: false },
});
  
module.exports = mongoose.model('Taxi', taxiSchema);