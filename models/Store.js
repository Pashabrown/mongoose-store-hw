// import model and schema
const { Schema } = require("mongoose")
const {model, schema} = require("../db/connection")

//create schema
const StoreSchema = new Schema({
    itemId: String,
    title: String, 
    img: String,
    price: String,
    stocks:{type: Number, maxval: 10}
}, {timestamps: true})

//create a model 
const Store = model("store", StoreSchema)

//eporet the store model 
module.exports = Store