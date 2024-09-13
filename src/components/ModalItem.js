import "./ModalItem.css";

import tiramisu from "../assets/images/image-tiramisu-desktop.jpg";

export default function ModalItem() {
    return (
      <div className="modal-item">
        <img src={tiramisu} alt="" />
        <p className="modal-item-name">Classic Tiramisu</p>
        <div className="modal-info">
            <p>1x</p>
            <p>@ $5.50</p>
        </div>
        <p className="modal-item-price">$5.50</p>
      </div>  
    );
}
