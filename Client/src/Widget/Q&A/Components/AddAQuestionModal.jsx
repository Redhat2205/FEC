import React from "react";

import MODAL from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <MODAL.Background>
      <MODAL.PopUp>
        <MODAL.Content>
          <input />
          <input />
          <input />
          <button onClick={onClose} type="button">Submit</button>
        </MODAL.Content>
      </MODAL.PopUp>
    </MODAL.Background>
  );
};

export default AddAQuestionModal;