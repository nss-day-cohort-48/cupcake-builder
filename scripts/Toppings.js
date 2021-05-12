import { getToppings } from "./database.js"
// Generate HTML representations of each frosting flavor object

const toppings = getToppings()

export const Toppings = () => {
    let html = "<ul>"

    const toppingsAsHTML = toppings.map(
        (toppingObject) => {
            return `
                <li>
                    <input type="radio" name="topping" value="${toppingObject.id}" /> ${toppingObject.name}
                </li>
            `
        }
    )

    const singleStringOfHTML = toppingsAsHTML.join("")

    html += singleStringOfHTML

    html += "</ul>"

    return html
}

