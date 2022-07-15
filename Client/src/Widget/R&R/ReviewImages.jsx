import React, { useState } from 'react';

const thumbnailStyle = {
  height: '10%',
  width: '10%',
};

const ReviewImages = (props) => {
  // the image modal
  const [showImage, setShowImage] = useState(false);

  if (showImage) {
    return (
      <p onClick={() => setShowImage(!showImage)}>image modal thumbnail testing</p>
    );
  } else {
    return (
      <ul>
        {props.images.map((obj) => (
          <img key={obj.id} src={obj.url} style={thumbnailStyle} onClick={() => setShowImage(!showImage)}></img>
        ))}
      </ul>
    );
  }
};

export default ReviewImages;