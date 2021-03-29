//import the store model 
const Store = require("../models/Store")

//controller functions 

//index - generates a page of all store items 
const index = async (req, res) => {
    const Stores = await Store.find({})
    //render the view
    res.render("store/index", {
        stores: Stores
    })
}


//show - generates a page of one store item 
    const show = async (req, res) => {
    //get the id param
    const id = req.params.id
    //get a item
    const store = await Store.findById(id)
    //render a view
    res.render("store/show", {
        store
    })
}

//newstore - generates a page to edit a store item 
const newStore = async (req, res) => {
    res.render("store/new")
}

//create - generates a store item and redirects to index
const create = async (req, res) => {
    res.send("create")
}

//edit - generates a page to edit a puppy 
const edit = async (req, res) => {
    res.send("edit")
}

//update - generates a store item and redirects to index
const update = async (req, res) => {
    res.send("update")
}

//destroy - generates a store item and redirects to index
const destroy = async (req, res) => {
    res.send("updatedestroy")
}

//exports my controller
module.exports = {
    index,
    show,
    new: newStore, 
    create, 
    edit, 
    update, 
    destroy,
}