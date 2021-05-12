import { Cakes } from "./Cakes.js"
import { FrostingFlavors } from "./FrostingFlavors.js"
import { Toppings } from "./Toppings.js"
import { SubmitButton } from "./SubmitButton.js"
import { Cupcakes } from "./Cupcakes.js"
export const CupcakeBuilder = () => {
    return `
    <h2>Cupcake Builder</h2>

    <article class="top-flex">
        <section>
            <h3>Cake Types</h3>
            ${ Cakes() }
        </section>
        <section>
            <h3>Frosting Flavors</h3>
            ${ FrostingFlavors() }
        </section>
        <section>
            <h3>Toppings</h3>
            ${ Toppings() }
        </section>
    </article>
        ${ SubmitButton() }
    <article>
        <h3>Cupcakes</h3>
        ${ Cupcakes() }
    </article>
    `
}