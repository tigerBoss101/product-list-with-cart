import "./ModalItem.css";

const context = require.context("..", true);

export default function ModalItem({ name, quantity, price, image }) {
	const imageSrc = context(image);

    return (
      <div className="modal-item">
        <img src={imageSrc} alt="" />
        <p className="modal-item-name">{name}</p>
        <div className="modal-info">
            <p>{quantity}x</p>
            <p>@ ${price.toFixed(2)}</p>
        </div>
        <p className="modal-item-price">${(quantity*price).toFixed(2)}</p>
      </div>  
    );
}
