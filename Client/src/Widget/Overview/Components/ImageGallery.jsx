import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);
  const [currMainIndex, setCurrMainIndex] = useState(null);
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (currStyle.name !== undefined) {
      setCurrMainIndex(0);

      const mainArr = [];
      const thumbnailArr = [];
      currStyle.photos.forEach((photoObj) => {
        mainArr.push(photoObj.url);
        thumbnailArr.push(photoObj.thumbnail_url);
      });
      setMainImages(mainArr);
      setThumbnails(thumbnailArr);
    }
  }, [currStyle]);

  const nextMainImage = () => {
    const newIndex = currMainIndex + 1;
    setCurrMainIndex(newIndex);
  };
  const prevMainImage = () => {
    const newIndex = currMainIndex - 1;
    setCurrMainIndex(newIndex);
  };

  if (currMainIndex !== null) {
    return (
      <SectionDiv.ImageGallerySection>
        {/* <IG.MainImageDiv
          style={{ backgroundImage: `url(${currMainIndex})` }}
          alt={currStyle.name}
        > */}
        <IG.ThumbnailSection>
          AM I ON TOP?
        </IG.ThumbnailSection>

        <IG.LeftArrow>
          {currMainIndex === 0 ? null
            : <IG.ArrowSpan onClick={prevMainImage}> 《 </IG.ArrowSpan>}
        </IG.LeftArrow>

        <IG.MainImage src={mainImages[currMainIndex]} alt={currStyle} />

        <IG.RightArrow>
          {currMainIndex === mainImages.length - 1 ? null
            : <IG.ArrowSpan onClick={nextMainImage}> 》 </IG.ArrowSpan>}
        </IG.RightArrow>
        {/* </IG.MainImageDiv> */}
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;