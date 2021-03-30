// import model and schema
const { Schema } = require("mongoose")
const {model, schema} = require("../db/connection")

//create schema
const StoreSchema = new Schema({
    Title: String, 
    img: String,
    price: String,
    stock:{type: Number, default: 10}
}, {timestamps: true})

//create a model 
const Store = model("store", StoreSchema)

//eporet the store model 
module.exports = Store