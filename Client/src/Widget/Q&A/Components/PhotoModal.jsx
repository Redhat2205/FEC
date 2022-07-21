import React, { useState } from "react";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AnswerPhoto = ({ url, onClose }) => (
  <Modal.Background>
    <Modal.PopUp>
      <Modal.Content>
        <img width="750px" height="650px" alt="answerspic" src={url} />
        <Modal.CloseButton onClick={onClose}> X </Modal.CloseButton>
      </Modal.Content>
    </Modal.PopUp>
  </Modal.Background>
);
export default AnswerPhoto;