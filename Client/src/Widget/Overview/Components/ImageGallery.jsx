import React, { useState } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);

  if (currStyle.name !== undefined) {
    const [mainUrl, setMainUrl] = useState(currStyle.photos[3].url);

    return (
      <SectionDiv.ImageGallerySection>
        <IG.MainImage
          style={{ backgroundImage: `url(${mainUrl})` }}
          alt={currStyle.name}
        />
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;