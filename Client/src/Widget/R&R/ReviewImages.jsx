import React, { useState } from 'react';
import ReviewImageModal from './ReviewImageModal.jsx';

const thumbnailStyle = {
  height: '10%',
  width: '10%',
};

const cursorStyle = {
  height: '50%',
  width: '50%',
  // cursor: 'zoom-in',
};

const imageModalStyle = {
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

const imageModalContentStyle = {
  width: '500px',
  backgroundColor: '#fff',
};

const imageModalBodyStyle = {
  padding: '10px',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

// fix the hover. stretch goal. change cursor to a zoom-in on hovering each thumbnail!
const ReviewImages = ({ images }) => {
  // the image modal
  const [showImage, setShowImage] = useState(false);
  const [cursor, setCursor] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  if (showImage) {
    return (
      <ReviewImageModal url={currentUrl} setShowImage={setShowImage} showImage={showImage}/>
    );
  } else {
    // fancy cursor
    if (cursor) {
      return (
        <ul>
          {images.map((obj) => (
            <img key={obj.id} src={obj.url} style={cursorStyle} onMouseLeave={(old) => setCursor(!old)} onClick={() => setShowImage(!showImage)}></img>
          ))}
        </ul>
      );
    } else {
      return (
        <ul>
          {images.map((obj) => (
            // <img key={obj.id} src={obj.url} style={thumbnailStyle} onMouseEnter={(old) => setCursor(!old)} onClick={() => setShowImage(!showImage)} onClick={() => setCurrentUrl(obj.url)}></img>
            <img key={obj.id} src={obj.url} style={thumbnailStyle} onMouseEnter={(old) => setCursor(!old)} onClick={() => {setShowImage(!showImage); setCurrentUrl(obj.url)}}></img>
          ))}
        </ul>
      );
    }
  }
};

export default ReviewImages;