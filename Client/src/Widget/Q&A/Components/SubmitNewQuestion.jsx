import React, { useState } from "react";
import SubmitQuestionModal from "./SubmitQuestionModal.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";

const SubmitNewQuestion = ({
  qA, getQa, productName, onSubmitHandle, productID,
}) => {
  const [modalSubQuestion, setModalSubQuestion] = useState(false);
  return (
    <div>
      <Style.AddQuestion onClick={() => (setModalSubQuestion(true))}>Submit New Question</Style.AddQuestion>
      {modalSubQuestion && (
      <SubmitQuestionModal
        onSubmitHandle={onSubmitHandle}
        productName={productName}
        modalSubQuestion={modalSubQuestion}
        onClose={() => (setModalSubQuestion(false))}
        productID={productID}
        getQa={getQa}
      />
      )}
    </div>
  );
};
export default SubmitNewQuestion;