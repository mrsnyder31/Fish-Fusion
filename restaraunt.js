/** 
 * invoke mongerInventory
 * change object info into html format with a function
 * 
 * restraunt set buying price point.
 * if fish are availabe, restaruant will buy half of mongerinventory
 * 
 * need three html strings per fish. see format
 * 
 * <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>


*/
const { mongerInventory } = require("./fishMonger.js");
const { boatInventory } = require("./fishingBoat.js");

let restarauntInventory = []

const fishMenu = (mongerInventory) => {
    let restarauntMenuString = ""

    for (const fish of mongerInventory){
        if (fish.price < 5 ) {
            fish.amount = fish.amount * 0.5
            restarauntInventory.push(fish) 
            restarauntMenuString += 
            `\t<h1>Menu</h1>\n<article class="menu">\n\t<h2>${fish.species}</h2>\n\t<section class="menu__item">${fish.species} Soup</section>\n\t<section class="menu__item">${fish.species} Sandwich</section>\n\t<section class="menu__item">${fish.species} Tuna</section>\n</article>\n`
        
        }
    }
    return restarauntMenuString
}

fishMenu(mongerInventory(boatInventory()))
console.log(restarauntInventory)
console.log(fishMenu(mongerInventory(boatInventory())))




module.exports = { fishMenu }