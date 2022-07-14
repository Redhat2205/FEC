import React from "react";
import Slider from "react-slick";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);

  if (currStyle.name !== undefined) {
    const mainUrl = currStyle.photos[0].url;
    const styleName = currStyle.name;

    return (
      <SectionDiv.ImageGallerySection>
        <IG.MainImage src={mainUrl} alt={styleName} />
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;