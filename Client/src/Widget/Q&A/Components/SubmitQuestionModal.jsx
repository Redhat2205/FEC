import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const SubmitQuestionModal = ({
  productName, onClose, onSubmitHandle, modalSubQuestion, productID,
}) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  if (!modalSubQuestion) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Submit Your Question</h1>
          <h3>{`About the ${productName}`}</h3>
          {submit && <span>Successfully Submited</span>}
          <span> What is your nickname:*</span>
          <Modal.Name
            size="60"
            placeholder="Example: jack543!"
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
          <span>Your question:</span>
          <Modal.SubmitInput
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <br />
          <button onClick={() => { onSubmitHandle(body, name, email, productID); }} type="button">Submit</button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default SubmitQuestionModal;