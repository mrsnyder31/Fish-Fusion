/**monger buys 10 inexepensive fish from the boat
 * inexpensive fish are those that cost less than 7.50
restaraunt can set a price threshold of what they want to buy from the monger. e.x only spend 5.00
***
the mongerinventory function needs to use what is exported by the fishing boat
    create a viarable that hold the mongrel inventory
express the monger buys 10 of each fish if 
        the price is less than 750 and the inventory has more than 10

set the contents of the boatinventory function as the parameter of the mongerinventory
the MI function also needs to generate its own inventory that restaraunts can use

*/
const { boatInventory } = require("./fishingBoat.js");




const mongerInventory = (boatInventory) => {
    let purchasedFish = []
   
    for (const fish of boatInventory){
        if (fish.price < 7.50 && fish.amount >= 10){
            fish.amount = 10
            purchasedFish.push(fish) 
        }
    }
    return purchasedFish
}


//console.log(mongerInventory(boatInventory()))






module.exports = { mongerInventory }