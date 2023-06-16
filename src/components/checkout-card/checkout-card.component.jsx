import "./checkout-card.styles.scss"

const CheckoutCard = ({cartItem}) => {
    const {id, name, imageUrl, price, quantity } = cartItem;

    return (
        <div>
            <img src={imageUrl} />
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    )
}

export default CheckoutCard;