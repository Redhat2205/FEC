import React, { useState } from "react";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import PhotoModal from "./PhotoModal.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const AnswerPhoto = ({ url }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Modal.PhotoContainer>
      <img onClick={() => (setShowModal(true))} width="160px" height="100px" alt="answerspic" src={url} />
      {showModal && <PhotoModal url={url} onClose={() => (setShowModal(false))} />}
    </Modal.PhotoContainer>
  );
};

export default AnswerPhoto;