import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const SubmitQuestionModal = ({
  productName, onClose, onSubmitHandle, modalSubQuestion, productID,
}) => {
  // const [name, setName] = useState("");
  // const [body, setBody] = useState("");
  // const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    body: "",
  });

  if (!modalSubQuestion) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          <form>
            <h1> Submit Your Question</h1>
            <h3>{`About the ${productName}`}</h3>
            <div>
              <Modal.FormLabel> What is your nickname </Modal.FormLabel>
              <input
                id="nickname"
                type="text"
                name="name"
                placeholder="Example:jack543!"
              />
            </div>
            <div>
              <Modal.FormLabel> Your email </Modal.FormLabel>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Example:jack@email.com"
              />
            </div>
            <div>
              <Modal.FormLabel> What is your nickname </Modal.FormLabel>
              <input
                id="body"
                type="text"
                name="body"
                placeholder="Ask something here"
              />
            </div>
            <button type="submit">Submit Question</button>
          </form>
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default SubmitQuestionModal;