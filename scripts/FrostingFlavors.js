import { getFrostingFlavors } from "./database.js"
// Generate HTML representations of each frosting flavor object

const frostingFlavors = getFrostingFlavors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "frostingFlavor") {
            const frostingFlavorId = parseInt(changeEvent.target.value)
            setFrostingFlavorId(frostingFlavorId)
        }
    }
)

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

