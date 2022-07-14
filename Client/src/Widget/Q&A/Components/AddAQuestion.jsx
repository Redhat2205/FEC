import React, { useState } from "react";
import AddAQuestionModal from "./AddAQuestionModal.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestion = ({ productName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal.AddQuestion
        type="button"
        onClick={() => {
          setIsOpen(true);
          console.log(isOpen);
        }}
      >
        ADD A QUESTION +
      </Modal.AddQuestion>
      <AddAQuestionModal
        productName={productName}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  );
};

export default AddAQuestion;