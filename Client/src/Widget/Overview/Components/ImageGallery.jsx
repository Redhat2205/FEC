import React, { useState } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);

  if (currStyle.name !== undefined) {
    const [mainUrl, setMainUrl] = useState(currStyle.photos[0].url);

    return (
      <SectionDiv.ImageGallerySection>
        <IG.MainImage
          // style={{ backgroundImage: `url(${mainUrl})` }}
          // alt={currStyle.name}
        >
          <IG.ThumbnailSection>
            AM I ON TOP?
          </IG.ThumbnailSection>
          <IG.LeftArrow>
            <IG.ArrowSpan> 《 </IG.ArrowSpan>
          </IG.LeftArrow>
          <IG.MainImageDiv
            style={{ backgroundImage: `url(${mainUrl})` }}
            alt={currStyle.name}
          >
            HEYYYY
          </IG.MainImageDiv>
          <IG.RightArrow>
            <IG.ArrowSpan> 》 </IG.ArrowSpan>
          </IG.RightArrow>
        </IG.MainImage>
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;