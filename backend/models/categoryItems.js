//Importar o mongoose para criar uma nova Schema
const mongoose = require('mongoose');

//criar Schema
const CategoryItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

//export this Schema
module.exports = mongoose.model('category', CategoryItemSchema);