import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);

  if (currStyle.name !== undefined) {
    const [mainUrl, setMainUrl] = useState(currStyle.photos[0].url);

    useEffect(() => {
      setMainUrl(currStyle.photos[0].url);
    }, [currStyle]);

    return (
      <SectionDiv.ImageGallerySection>
        <IG.ThumbnailSection>
          AM I ON TOP?
        </IG.ThumbnailSection>
        <IG.LeftArrow>
          <IG.ArrowSpan> 《 </IG.ArrowSpan>
        </IG.LeftArrow>
        {/* <IG.MainImageDiv
          style={{ backgroundImage: `url(${mainUrl})` }}
          alt={currStyle.name}
        /> */}
        <IG.MainImage src={mainUrl} alt={currStyle} />
        <IG.RightArrow>
          <IG.ArrowSpan> 》 </IG.ArrowSpan>
        </IG.RightArrow>
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;