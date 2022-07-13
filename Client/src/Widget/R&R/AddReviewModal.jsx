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
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-container" style={modalStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <div style={{modalHeaderStyle}}>header</div>
          <div style={{modalBodyStyle}}>body</div>
          <div className="modal-footer" style={{modalFooterStyle}}>
            <button onClick={() => props.setShow(!props.show)}>Close</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddReviewModal;