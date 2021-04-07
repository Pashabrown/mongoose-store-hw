//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Store = require("../models/Store")
///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  //*********DATABASE Code Goes Here
  const attributes = await Store.create([
    //shinigami eyes
    {img: "https://i.pinimg.com/originals/55/d2/a5/55d2a5a84c57326e1598557bb5186f62.png", itemId:1, title: ": Shinigami Eyes (deathNote)", price: "Half your current life span"},
    //Kongfu
    {img: "https://i.ytimg.com/vi/nO8YUbBkFzE/maxresdefault.jpg", itemId:2, title: ": KongFU Skills download (matrix)", price: "Accepting your whole Life was a simulation"},
    //become a mermaid
    {img: "http://www.leisurepro.com/blog/wp-content/uploads/2018/01/shutterstock_706472275-1366x800@2x.jpg", itemId:3, title: ": Become a Mermaid (little mermaid)", price: "Your Voice"},
    //meditation
    {img: "https://www.verywellmind.com/thmb/kr2L-lGcfe-UTw6sF1-2AJ08pjo=/2119x1192/smart/filters:no_upscale()/GettyImages-938890492-becc3fc4757849bea672f148454943f9.jpg", itemId:4, title: ": Meditation", price: "Breathing and Letting go" },
    //time travel to prevent stupidity
    {img: "https://media.wusa9.com/assets/WUSA/images/5e2b8c57-dbb8-4085-8fbd-cb8c05cbf336/5e2b8c57-dbb8-4085-8fbd-cb8c05cbf336_1920x1080.jpg", itemId:5, title: ": Time Travel to prevent Stupidity", price: "EpicParadox"},
    //the power to fly
    {img: "https://image.shutterstock.com/image-photo/full-length-sporty-female-flying-260nw-158771948.jpg", itemId:6, title: ": The Power to Fly", price: "Becoming a Dope Fiend"},
  ])
  //***************************** */
  console.log("seed file")

  mongoose.disconnect()
}




// Run Seed Function
mongoose.connection.on("open", () => {
  seed()
})
// seed()