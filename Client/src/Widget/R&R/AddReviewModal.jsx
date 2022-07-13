import React from 'react';

var modalStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

var modalContentStyle = {
  width: '500px',
  backgroundColor: '#fff',
};

var modalHeaderStyle = {
  padding: '10px',
};
var modalFooterStyle = {
  padding: '10px',
};

var modalBodyStyle = {
  padding: '10px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

const AddReviewModal = (props) => {
  // console.log('current item⭐️', props.viewedItem.name);
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-container" style={modalStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <div style={{modalHeaderStyle}}>
            <h1>Write Your Review</h1>
            <h3>About {props.viewedItem.name}</h3>
          </div>
          <div className="modal-body" style={{modalBodyStyle}}>
            <h5>Overall rating</h5>
            <h5>Do you recommend this product?</h5>
            <h5>Characteristics</h5>
            <h5>Review summary</h5>
            <h5>Review body</h5>
            <h5>Upload photos</h5>
            <h5>What is your nickname?</h5>
            <h5>What is your email?</h5>
            <button>Submit review</button>
          </div>
          <div className="modal-footer" style={{modalFooterStyle}}>
            <button onClick={() => props.setShow(!props.show)}>Close</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddReviewModal;