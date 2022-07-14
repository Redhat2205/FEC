import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const SubmitQuestionModal = ({ productName, onClose, modalSubQuestion }) => {
  if (!modalSubQuestion) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Submit Your Question</h1>
          <h3>{`About the ${productName}`}</h3>
          <span> What is your nickname:*</span>
          <Modal.Name size="60" placeholder="Example: jack543!" />
          <br />
          <span>Your email*:</span>
          <Modal.Name
            placeholder="Example: jack@email.com"
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="60"
            required
          />
          <br />
          <span>Your question:</span>
          <Modal.SubmitInput size="1000" />
          <br />
          <button onClick={onClose} type="button">Submit</button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default SubmitQuestionModal;