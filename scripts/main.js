import { CupcakeBuilder } from "./CupcakeBuilder.js"

const main = document.querySelector(".main-container")

const renderHTML = () => {
    main.innerHTML = CupcakeBuilder()
}

renderHTML()
