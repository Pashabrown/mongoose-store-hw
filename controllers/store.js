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
    //create the new store item
    await Store.create(req.body)
    //redirecting to main page
    res.redirect("/store")
}

//edit - generates a page to edit a puppy 
const edit = async (req, res) => {
    //get the id param
    const id = req.params.id
    //get a item
    const store = await Store.findById(id)
    //render a view
    res.render("store/edit", {
        store
    })
}

//update - generates a store item and redirects to index
const update = async (req, res) => {
    // grab the id from params
    const id = req.params.id
    //updaye the store attribute
    await Store.findByIdUpdate(id, req.body, {new: true})
    //redirect to index page
    res.redirect(`/store/${id}`)
}

//destroy - generates a store item and redirects to index
const destroy = async (req, res) => {
    const id = req.params.id
    //delete attribute
    await Store.findByIdAndDelete(id)
    //redirect to main page
    res.redirect("/store")
}

const buyStock = async (req, res) => {
    //grab the ID
    
    const id = req.params.id
    console.log(id)
    const itemId = req.params.itemid.toString()
    console.log(itemId)
    //increment the stock lower
    const item = await  Store.findOneAndUpdate({itemId:itemId }, {$inc: {stocks: -1}})
    console.log(item)
    res.redirect("/store")
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
    buyStock
}