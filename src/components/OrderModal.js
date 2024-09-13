import ReactModal from 'react-modal';

import ModalItem from "./ModalItem";                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

import "./OrderModal.css";
import orderConfirmed from '../assets/images/icon-order-confirmed.svg';

export default function OrderModal({ modalOpened, setModalOpened }) {
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
                <ModalItem />
                <ModalItem />
                <div id="total-info">
                    <p>Order Total</p>
                    <p>$46.50</p>
                </div>
            </div>
            <button 
                id="new-order-button"
                onClick={() => setModalOpened(false)}
            >
                Start New Order
            </button>
        </ReactModal>
    )
}