import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutCard } from "../../components/checkout-card/checkout-card.component";

import "./checkout.styles.scss"

const Checkout = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div>
            {cartItems.map(item => 
            <CheckoutCard key={item.id} cartItem={item} />
            )}
        </div>
    )

}

export default Checkout;