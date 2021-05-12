import { getFrostingFlavors } from "./database.js"
// Generate HTML representations of each frosting flavor object

const frostingFlavors = getFrostingFlavors()

export const FrostingFlavors = () => {
    let html = "<ul>"

    const frostingFlavorsAsHTML = frostingFlavors.map(
        (frostingFlavorObject) => {
            return `
                <li>
                    <input type="radio" name="frostingFlavor" value="${frostingFlavorObject.id}" /> ${frostingFlavorObject.name}
                </li>
            `
        }
    )

    const singleStringOfHTML = frostingFlavorsAsHTML.join("")

    html += singleStringOfHTML

    html += "</ul>"

    return html
}

