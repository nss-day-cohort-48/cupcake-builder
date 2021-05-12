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
    frostingFlavors: [],
    toppings: [],
    cupcakes: [],
    cupcakeBuilder: {}
}

export const getCakes = () => {
    return [...database.cakeTypes]
}