import { Cakes } from "./Cakes.js"
import { FrostingFlavors } from "./FrostingFlavors.js"
export const CupcakeBuilder = () => {
    return `
    <h2>Cupcake Builder</h2>

    <article>
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
        </section>
    </article>

    <article>
        <h3>Cupcakes</h3>
    </article>
    `
}