import ReactModal from 'react-modal';

import ModalItem from "./ModalItem";                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

import "./OrderModal.css";
import orderConfirmed from '../assets/images/icon-order-confirmed.svg';

export default function OrderModal({ modalOpened, setModalOpened, allData, setQuantities }) {
    const nonEmpty = allData.filter(([idx, data, quantity]) => quantity > 0)
    const modalItems = nonEmpty.map(([idx, data, quantity]) => {
        return (
            <ModalItem
                key={idx}
                name={data.name}
                quantity={quantity}
                price={data.price}
                image={data.image.thumbnail}
            />
        );
    })
    const totalPrice = allData.reduce((acc, [_, data, quantity]) => {
        return acc + data.price * quantity;
    }, 0);

    const onClose = () => {
        setModalOpened(false);
        setQuantities(Array(allData.length).fill(0));
    }

    return (
        <ReactModal
            isOpen={modalOpened}
            onRequestClose={() => setModalOpened(false)}
            overlayClassName={"modal-overlay"}
            className={"modal-content"}
        >
            <img src={orderConfirmed} alt="" />
            <div id="confirmed-message">
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
            </div>
            <div className="modal-items">
                {modalItems}
                <div id="total-info">
                    <p>Order Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <button 
                id="new-order-button"
                onClick={onClose}
            >
                Start New Order
            </button>
        </ReactModal>
    )
}