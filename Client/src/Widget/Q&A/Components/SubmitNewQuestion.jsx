import React, { useState } from "react";
import SubmitQuestionModal from "./SubmitQuestionModal.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const SubmitNewQuestion = ({
  qA, productName, onSubmitHandle, productID,
}) => {
  const [modalSubQuestion, setModalSubQuestion] = useState(false);
  return (
    <div>
      <Modal.AddQuestion onClick={() => (setModalSubQuestion(true))} type="Modal.AddQuestion">Submit New Question</Modal.AddQuestion>
      {modalSubQuestion && (
      <SubmitQuestionModal
        onSubmitHandle={onSubmitHandle}
        productName={productName}
        modalSubQuestion={modalSubQuestion}
        onClose={() => (setModalSubQuestion(false))}
        productID={productID}
      />
      )}
    </div>
  );
};
export default SubmitNewQuestion;