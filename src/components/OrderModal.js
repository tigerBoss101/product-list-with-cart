import ReactModal from 'react-modal';

import "./OrderModal.css";

export default function OrderModal({ modalOpened, setModalOpened }) {
    return (
        <ReactModal
            isOpen={modalOpened}
            onRequestClose={() => setModalOpened(false)}
            overlayClassName={"modal-overlay"}
            className={"modal-content"}
        >
            <h1>Modal lol</h1>
        </ReactModal>
    )
}