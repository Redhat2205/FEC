import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestionModal = ({
  isOpen, onClose, productName, onSubmitHandle, productID,
}) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  if (!isOpen) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <h1> Ask Your Question</h1>
          <h3>{`About the ${productName}`}</h3>
          {submit && <span>Successfully Submited</span>}
          <form>
            <span> What is your nickname:</span>
            <br />
            <Modal.Name
              size="60"
              placeholder="Example: jack543!"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <span>Your email:</span>
            <br />
            <Modal.Name
              onChange={(e) => {
                setEmail(e.target.value);
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
            <br />
            <Modal.SubmitInput
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                onSubmitHandle(body, name, email, productID);
                setSubmit(true);
              }}
              type="button"
            >
              Submit
            </button>
          </form>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAQuestionModal;