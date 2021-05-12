import { getCupcakes, getCakes, getFrostingFlavors, getToppings, } from "./database.js"
// Write a function that generates HTML representations of cupcake objects.

// const cupcakes = getCupcakes() // ONLY RUNS on page load
// Will NOT update with state of cupcakes array when a new cupcake is added
const arrayOfCakeTypes = getCakes()
const frostingFlavor = getFrostingFlavors()
const toppings = getToppings()

// Cupcake #1
// Cupcake #2 has Carrot Cake base, a Cream Cheese flavored frosting, and Cinnamon Sugar.
export const Cupcakes = () => {

    const arrayOfCupcakes = getCupcakes() // gets current state of cupcakes array from database

    let html = ""

    const arrayOfHTMLCupcakes = arrayOfCupcakes.map(
        (cupcakeObject) => {

            const foundCakeTypeObject = arrayOfCakeTypes.find(
                (cakeObject) => {
                    return cupcakeObject.cakeTypeId === cakeObject.id
                    // if(cupcakeObject.cakeTypeId === cakeObject.id){
                    //     return true
                    // }
                }
            )

            const foundFrostingObject = frostingFlavor.find(
                (frostingFlavorObject) => {
                    return cupcakeObject.frostingFlavorId === frostingFlavorObject.id
                }
            )

            const foundToppingObject = toppings.find(
                (toppingObject) => {
                    return cupcakeObject.toppingId === toppingObject.id
                }
            )

            return `
                <p>Cupcake #${cupcakeObject.id} has a ${foundCakeTypeObject.name} base, a ${foundFrostingObject.name} flavored frosting, and ${foundToppingObject.name} on top.</p>
            `
        }
    )

    html += arrayOfHTMLCupcakes.join("")

    return html
}