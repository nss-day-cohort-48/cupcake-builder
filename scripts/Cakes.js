import { getCakes } from "./database.js"
// Generate HTML representations of each cake object

const cakes = getCakes()

export const Cakes = () => {
    let html = "<ul>"

    const arrayOfCakeHTMLInputElements = cakes.map(
        (cakeObject)=>{
            return `
                <li>
                    <input type="radio" name="cakeType" value="${cakeObject.id}" /> ${cakeObject.name}
                </li>
            `
        }
    )

    const singleStringOfHTML = arrayOfCakeHTMLInputElements.join("")

    html += singleStringOfHTML

    html += "</ul>"

    return html
}

