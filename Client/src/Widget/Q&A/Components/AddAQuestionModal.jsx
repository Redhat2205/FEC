import React, { useState} from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestionModal = ({
  isOpen, onClose, productName, onSubmitHandle, productID,
}) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  if (!isOpen) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Ask Your Question</h1>
          <h3>{`About the ${productName}`}</h3>
          <span> What is your nickname:</span>
          <Modal.Name
            size="60"
            placeholder="Example: jack543!"
            onChange={(e) => {
              setName(JSON.stringify(e.target.value));
            }}
          />
          <br />
          <span>Your email:</span>
          <Modal.Name
            onChange={(e) => {
              if (e.target.value.length < 0) {
                console.log('blank');
              }
              setEmail(JSON.stringify(e.target.value));
            }}
            placeholder="Example: jack@email.com"
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="60"
            required
          />
          <br />
          <span>Your question:</span>
          <Modal.SubmitInput
            onChange={(e) => {
              setBody(JSON.stringify(e.target.value));
            }}
          />
          <br />
          <button
            onClick={() => {
              console.log(body, name, email);
              onSubmitHandle(body, name, email, productID);
              onClose();
            }}
            type="button"
          >
            Submit
          </button>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAQuestionModal;