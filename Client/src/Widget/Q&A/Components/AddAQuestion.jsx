import React, { useState } from "react";
import AddAQuestionModal from "./AddAQuestionModal.jsx";
import MODAL from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AddAQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          console.log(isOpen);
        }}
      >
        Add A Question +
      </button>
      <AddAQuestionModal
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  );
};

export default AddAQuestion;