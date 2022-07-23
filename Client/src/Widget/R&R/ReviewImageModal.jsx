/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

const containerStyle = {
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

const contentStyle = {
  // width: '500px',
  // backgroundColor: '#fff',
};

const bodyStyle = {
  padding: '10px',
  // borderTop: '1px solid #eee',
  // borderBottom: '1px solid #eee',
};

const ReviewImageModal = ({ url, setShowImage, showImage }) =>
  // const escHandler = (e) => {
  //   if (e.keyCode === 27) {
  //     console.log('esc key!');
  //     setShowImage(!showImage);
  //   }
  // };
  // onKeyDown={(e) => {escHandler(e)}
  (
  // <div style={containerStyle} className="review-image-modal-container" tabIndex="0" onKeyDown={(e) => {escHandler(e)}}>
    <div style={containerStyle} className="review-image-modal-container" tabIndex="0">
      <button type="button" onClick={() => setShowImage(!showImage)}>✕</button>
      <div style={contentStyle} className="review-image-modal-content">
        <div style={bodyStyle} className="review-image-modal-body">
          <img alt="user-submitted" src={url} />
        </div>
      </div>
    </div>
  );
export default ReviewImageModal;