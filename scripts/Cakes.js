import { getCakes, setCakeTypeId } from "./database.js"

// Get array of cake types from database
const cakes = getCakes()

// Listen for a change on the DOM
document.addEventListener(
    "change",
    (changeEvent) => { // What do we do when that change occurs??
        if(changeEvent.target.name === "cakeType"){ // check if the name attribute is 'cakeType'
            // if it IS 'cakeType', then we capture the value of the 'value' attribute
            const cakeObjectId = parseInt(changeEvent.target.value) // parseInt to change the string to an integer
            setCakeTypeId(cakeObjectId) // invoke setCakeType to store the cakeObj id in temporary state
        }
    }
)

// Generate HTML representations of each cake object
export const Cakes = () => {
    let html = "<ul>" // Create variable to hold html

    const arrayOfCakeHTMLInputElements = cakes.map( // Iterate through cakes array
        (cakeObject) => { // invoke a function for each cake object
            // that converts each cake object into an HTML representation of that cake object
            return `
                <li>
                    <input type="radio" name="cakeType" value="${cakeObject.id}" /> ${cakeObject.name}
                </li>
            `
        }
    )
    // map returns an array
    // join all strings in array into one single string
    const singleStringOfHTML = arrayOfCakeHTMLInputElements.join("")

    html += singleStringOfHTML  // append single string of html to the current value of html variable

    html += "</ul>" // append a closing </ul> tag to the current value of html variable

    return html // return current value of html variable
}

