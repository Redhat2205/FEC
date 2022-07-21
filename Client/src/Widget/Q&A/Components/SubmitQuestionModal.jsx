import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";
import useQuestionForm from "../CreatedHooks/useQuestionForm.jsx";

const SubmitQuestionModal = ({
  productName, onClose, modalSubQuestion, productID, getQa,
}) => {
  const {
    handleSubmit, handleInput, values, submit,
  } = useQuestionForm(productID, getQa);

  if (!modalSubQuestion) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          {submit
            ? <h1>Successfully Submited</h1>
            : (
              <form onSubmit={handleSubmit}>
                <h1> Submit Your Question</h1>
                <h3>{`About the ${productName}`}</h3>
                <div>
                  <Modal.FormLabel> What is your nickname </Modal.FormLabel>
                  <Modal.Name
                    id="nickname"
                    type="text"
                    name="name"
                    placeholder="Example:jack543!"
                    value={values.name}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <Modal.FormLabel> Your email </Modal.FormLabel>
                  <Modal.Name
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Example:jack@email.com"
                    value={values.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <Modal.FormLabel> What is your nickname </Modal.FormLabel>
                  <Modal.SubmitInput
                    id="body"
                    type="text"
                    name="body"
                    placeholder="Ask something here"
                    value={values.body}
                    required
                    onChange={handleInput}
                  />
                </div>
                <button type="submit">Submit Question</button>
              </form>
            )}
          <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default SubmitQuestionModal;