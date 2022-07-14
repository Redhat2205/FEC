import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);

  if (currStyle.name !== undefined) {
    let mainUrl = currStyle.photos[0].url;
    const styleName = currStyle.name;

    const settings = {
      // customPaging(i) {
      //   return (
      //     <a>
      //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
      //     </a>
      //   );
      // },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <SectionDiv.ImageGallerySection>
        <Slider {...settings} style={{ "max-height": "600px" }}>
          {currStyle.photos.map((photo, index) => {
            mainUrl = photo.url;
            return (
              // <IG.MainImageSection>
              <IG.MainImage
                key={currStyle.style_id + index + 300}
                src={mainUrl}
                atr={styleName}
              />
              // </IG.MainImageSection>
            );
          })}
        </Slider>
        <div>abc</div>
      </SectionDiv.ImageGallerySection>
    );

    // return (
    //   <SectionDiv.ImageGallerySection>
    //     <IG.MainImage src={mainUrl} alt={styleName} />
    //   </SectionDiv.ImageGallerySection>
    // );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;