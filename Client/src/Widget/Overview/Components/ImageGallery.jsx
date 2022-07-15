import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);
  const [mainUrl, setMainUrl] = useState('');

  useEffect(() => {
    if (currStyle.name !== undefined) {
      setMainUrl(currStyle.photos[0].url);
    }
  }, [currStyle]);

  if (currStyle.name !== undefined) {
    return (
      <SectionDiv.ImageGallerySection>
        {/* <IG.MainImageDiv
          style={{ backgroundImage: `url(${mainUrl})` }}
          alt={currStyle.name}
        > */}
        <IG.ThumbnailSection>
          AM I ON TOP?
        </IG.ThumbnailSection>
        <IG.LeftArrow>
          <IG.ArrowSpan> 《 </IG.ArrowSpan>
        </IG.LeftArrow>
        <IG.MainImage src={mainUrl} alt={currStyle} />
        <IG.RightArrow>
          <IG.ArrowSpan> 》 </IG.ArrowSpan>
        </IG.RightArrow>
        {/* </IG.MainImageDiv> */}
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;