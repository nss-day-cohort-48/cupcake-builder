const database = {
    cakeTypes: [
        {
            id: 1,
            name: "German Chocolate",
            price: 7.50
        },
        {
            id: 2,
            name: "Carrot Cake",
            price: 4.50
        },
        {
            id: 3,
            name: "Red Velvet",
            price: 5.50
        },
        {
            id: 4,
            name: "Lemon",
            price: 3.50
        },
        {
            id: 5,
            name: "Tres Leches",
            price: 8.50
        }
    ],
    frostingFlavors: [
        {
            id: 1,
            name: "Cream Cheese",
            price: 1.00
        },
        {
            id: 2,
            name: "Vanilla",
            price: 1.00
        },
        {
            id: 3,
            name: "Chocolate",
            price: 1.00
        }
    ],
    toppings: [
        {
            id: 1,
            name: "Chocolate Sprinkles",
            price: .50
        },
        {
            id: 2,
            name: "Chocolate Curls",
            price: .50
        },
        {
            id: 3,
            name: "Rainbow Sprinkles",
            price: .50
        },
        {
            id: 4,
            name: "Cinnamon Sugar",
            price: .50
        }
    ],
    cupcakes: [
        {
            id: 2,
            cakeTypeId: 1,
            frostingFlavorId: 1,
            toppingId: 1
        }
    ],
    cupcakeBuilder: {}
}

export const getCupcakes = () => {
    return [...database.cupcakes]
}
export const addCupcake = () => {
    if(
        "cakeTypeId" in database.cupcakeBuilder &&
        "toppingId" in database.cupcakeBuilder &&
        "frostingFlavorId" in database.cupcakeBuilder
    ){
        const copyOfCupcakeBuilderObject = {...database.cupcakeBuilder}

        const copyOfCupcakesArray = [...database.cupcakes]

        const cupcakesArrayLength = database.cupcakes.length

        const newCupcakeId = cupcakesArrayLength > 0
            ? copyOfCupcakesArray.pop().id + 1
            : 1

        copyOfCupcakeBuilderObject.id = newCupcakeId

        database.cupcakes.push(copyOfCupcakeBuilderObject)

        database.cupcakeBuilder = {}

        document.dispatchEvent(new CustomEvent("stateOfCupcakesIsDifferent"))

    }

}

export const getCakes = () => {
    return [...database.cakeTypes]
}

export const getFrostingFlavors = () => {
    return [...database.frostingFlavors]
}

export const getToppings = () => {
    return [...database.toppings]
}

export const setCakeTypeId = (id) => {
    database.cupcakeBuilder.cakeTypeId = id
}

export const setFrostingFlavorId = (id) => {
    database.cupcakeBuilder.frostingFlavorId = id
}

export const setToppingId = (chosenToppingId) => {
    database.cupcakeBuilder.toppingId = chosenToppingId
}

