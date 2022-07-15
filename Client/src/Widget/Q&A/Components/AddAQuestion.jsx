import React, { useState } from "react";
import AddAQuestionModal from "./AddAQuestionModal.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestion = ({
  productName, qA, onSubmitHandle, productID,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (qA.length === 0) return null;
  return (
    <Modal.Add>
      <Modal.AddQuestion
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        ADD A QUESTION +
      </Modal.AddQuestion>
      <AddAQuestionModal
        productName={productName}
        onClose={() => (setIsOpen(false))}
        isOpen={isOpen}
        onSubmitHandle={onSubmitHandle}
        productID={productID}
      />
    </Modal.Add>
  );
};

export default AddAQuestion;