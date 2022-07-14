import React from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAnswerModal = ({ addModalStatus, onClose, questionBody }) => {
  if (!addModalStatus) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Submit Your Answer</h1>
          <h3>{`[Product Name]: ${questionBody}`}</h3>
          <span> What is your nickname*:</span>
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
          <span>Your answer:</span>
          <Modal.SubmitInput TextMode="MultiLine" size="1000" />
          <br />
          <button onClick={onClose} type="button">Submit Answer</button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAnswerModal;