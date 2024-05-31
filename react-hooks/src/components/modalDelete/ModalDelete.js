
import React from "react";
import classes from "../modalDelete/ModalDelete.module.css";

const ModalDelete = ({ onCancel, onConfirm }) => {
 
console.log("hello");
  return (
    <div className={classes["modal-content"]}>
      <h2>Delete user?</h2>
      <div className={classes["button-group"]}>
        <button onClick={onConfirm} className={classes["confirm-button"]}>Confirm</button>
        <button onClick={onCancel} className={classes["cancel-button"]}>Cancel</button>
      </div>
    </div>

  );
};

export default ModalDelete;