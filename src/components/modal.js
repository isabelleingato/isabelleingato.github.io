import React from "react"
import modalStyles from "./modal.module.scss"

export default function Modal({children, handleClose, isOpen}) {
    return (
        <div className={isOpen ? 'open ' : '' + modalStyles.container}>
            <div className={modalStyles.modal}>
                <div className={modalStyles.closeButton} onClick={handleClose} aria-label="Close">X</div>
                {children}
            </div>
        </div>
    )
}