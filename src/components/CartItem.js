import "./CartItem.css";

import removeItem from "../assets/images/icon-remove-item.svg";

export default function CartItem({ name, quantity, price, onRemove }) {
    return (
        <div className="cart-item">
            <p className="cart-item-name">{name}</p>
            <div className="cart-item-desc">
                <p className="cart-item-quantity">{quantity}x</p>
                <p className="cart-item-unit-price">@ ${price.toFixed(2)}</p>
                <p className="cart-item-total-price">${(price * quantity).toFixed(2)}</p>
            </div>
            <div className="remove-item-button">
                <img src={removeItem} alt="Remove Item" onClick={onRemove} />
            </div>
        </div>
    )
}