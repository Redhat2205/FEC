import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAnswerModal = ({
  addModalStatus, onClose, questionBody, productName, productID, onSubmitAnswerHandle, questionID,
}) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  if (!addModalStatus) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Submit Your Answer</h1>
          <h3>{`${productName}: ${questionBody}`}</h3>
          {submit && <span>Successfully Submited</span>}
          <span> What is your nickname*:</span>
          <Modal.Name
            size="60"
            placeholder="Example: jack543!"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <span>Your email*:</span>
          <Modal.Name
            placeholder="Example: jack@email.com"
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="60"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <span>Your answer:</span>
          <Modal.SubmitInput
            TextMode="MultiLine"
            size="1000"
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              onSubmitAnswerHandle(body, name, email, questionID);
              setSubmit(true);
            }}
            type="button"
          >
            Submit Answer
          </button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAnswerModal;