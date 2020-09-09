import React from "react"
import modalStyles from "./modal.module.scss"
//import Modal from "react-bootstrap/Modal";

// TODO: Just use react-bootstrap for goodness sake?
// https://react-bootstrap.github.io/components/modal/
// similar to what I have here, just unmounts on close?
// https://github.com/jquense/react-bootstrap-modal/blob/master/src/Modal.js
// 
export default function Modal({children, handleClose, isOpen}) {
    return (
        <div className={(isOpen ? modalStyles.open : modalStyles.closed)}>
            <div className={modalStyles.modal}>
                <button className={modalStyles.closeButton} onClick={handleClose} aria-label="Close">X</button>
                {children}
            </div>
        </div>
    )
}