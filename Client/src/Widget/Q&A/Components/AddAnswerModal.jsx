import React, { useState } from "react";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";
import useAnswerForm from "../CreatedHooks/useAnswerForm.jsx";

const AddAnswerModal = ({
  addModalStatus, onClose, questionBody, productName, questionID, getQa,
}) => {
  const {
    handleSubmit, handleInput, values, submit, setSubmit, handleOnChangePhoto, imageSrc,
  } = useAnswerForm(questionID, getQa);

  if (!addModalStatus) return null;
  return (
    <Modal.Background>
      <Modal.PopUp>
        <Modal.Content>
          {submit
            ? <h1>Successfully Submited</h1>
            : (
              <form overflow="auto" onSubmit={handleSubmit}>
                <h1> Submit Your Answer</h1>
                <h3>{`${productName}: ${questionBody}`}</h3>
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
                    type="text"
                    name="body"
                    placeholder="Ask something here"
                    value={values.body}
                    required
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <Modal.FormLabel> Upload Photo </Modal.FormLabel>
                  <Modal.Name type="file" name="photo" onChange={handleOnChangePhoto} />
                  <br />
                  {imageSrc.length >= 1 && <Modal.Name type="file" name="photo" onChange={handleOnChangePhoto} />}
                  <br />
                  {imageSrc.length >= 2 && <Modal.Name type="file" name="photo" onChange={handleOnChangePhoto} />}
                  <br />
                  {imageSrc.length >= 3 && <Modal.Name type="file" name="photo" onChange={handleOnChangePhoto} />}
                  <br />
                  {imageSrc.length >= 4 && <Modal.Name type="file" name="photo" onChange={handleOnChangePhoto} />}
                </div>
                <button type="submit">Submit Question</button>
              </form>
            )}
          <Modal.CloseButton onClick={() => { onClose(); setSubmit(false); }}> X </Modal.CloseButton>
        </Modal.Content>
      </Modal.PopUp>
    </Modal.Background>
  );
};

export default AddAnswerModal;