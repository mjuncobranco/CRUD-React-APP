import React from "react";
import ReactDOM from "react-dom";
import classes from '../modal/Modal.module.css';

const Modal = ( {children} ) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal-content"]}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
