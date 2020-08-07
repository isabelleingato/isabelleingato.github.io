import React from "react"
import modalStyles from "./modal.module.scss"

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