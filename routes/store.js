//import Router and Controllers
const router = require("express").Router()
const StoreController = require("../controllers/store")

//index get => "/store"
router.get("/", StoreController.index)

//new get => "/store/new"
router.get("/new", StoreController.new)

//create post => "/store"
router.post("/", StoreController.create)

//index get => "/store/:id/edit"
router.get("/:id/edit", StoreController.edit)

//index put => "/store"
router.put("/", StoreController.update)


//destroy delete => "/store/:id"
router.delete("/:id", StoreController.destroy)

//index get => "/store/:id"
router.get("/:id", StoreController.show)

//export the router 
module.exports = router