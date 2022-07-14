import React from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Ask Your Question</h1>
          <h3>About the [Product Name Here]</h3>
          <span> What is your nickname:</span>
          <input />
          <br />
          <span>Your email:</span>
          <input
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="30"
            required
          />
          <br />
          <span>Your question:</span>
          <input />
          <br />
          <button onClick={onClose} type="button">Submit</button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAQuestionModal;