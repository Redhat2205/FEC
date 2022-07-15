import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ImageGallery = ({ currStyle }) => {
  // console.log('styles in IG: ', currStyle);
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currIndex, setcurrIndex] = useState(null);
  const [currTnSet, setCurrTnSet] = useState([]);

  useEffect(() => {
    if (currStyle.name !== undefined) {
      setcurrIndex(0);

      const mainArr = [];
      const thumbnailArr = [];
      currStyle.photos.forEach((photoObj) => {
        mainArr.push(photoObj.url);
        if (photoObj.thumbnail_url[0] === 'u') {
          console.log('photoObj:', photoObj.thumbnail_url.slice(1))
          thumbnailArr.push(photoObj.thumbnail_url.slice(1));
        } else {
          thumbnailArr.push(photoObj.thumbnail_url);
        }
      });
      setMainImages(mainArr);
      setThumbnails(thumbnailArr);
      setCurrTnSet(thumbnailArr.slice(0, 7));
    }
  }, [currStyle]);

  // const changeCurrTnSet = () => {
  //   if (currIndex >= 0 && currIndex < 6) {
  //     setCurrTnSet(thumbnails.slice(0, 7));
  //   } else if (currIndex >= 6 && currIndex < 13) {
  //     setCurrTnSet(thumbnails.slice(7, 14));
  //   } else if (currIndex >= 13 && currIndex < 20) {
  //     setCurrTnSet(thumbnails.slice(14, 21));
  //   }
  // };

  // =========== Arrows ===========
  const nextMainImage = () => {
    const newIndex = currIndex + 1;
    if (currIndex >= 0 && currIndex < 6) {
      setCurrTnSet(thumbnails.slice(0, 7));
    } else if (currIndex >= 6 && currIndex < 13) {
      setCurrTnSet(thumbnails.slice(7, 14));
    }
    setcurrIndex(newIndex);
  };
  const prevMainImage = () => {
    const newIndex = currIndex - 1;
    if (currIndex >= 0 && currIndex <= 7) {
      setCurrTnSet(thumbnails.slice(0, 7));
    } else if (currIndex > 7 && currIndex < 13) {
      setCurrTnSet(thumbnails.slice(7, 14));
    }
    setcurrIndex(newIndex);
  };
  const nextSetThumbnail = () => {
    setCurrTnSet(thumbnails.slice(7, 14));
  };
  const prevSetThumbnail = () => {
    setCurrTnSet(thumbnails.slice(0, 7));
  };

  if (currIndex !== null) {
    return (
      <SectionDiv.ImageGallerySection>
        {/* <IG.MainImageDiv
          style={{ backgroundImage: `url(${mainImages[currIndex]})` }}
          alt={currStyle.name}
        > */}
        <IG.ThumbnailSection>
          <IG.TnUpArrow onClick={prevSetThumbnail}> ⌃ </IG.TnUpArrow>
          {currTnSet.map((thumbnail) => {
            if (thumbnail === thumbnails[currIndex]) {
              return (

                <IG.Thumbnail
                  style={{
                    borderWidth: '2px 2px 2px 10px',
                    borderStyle: 'ridge',
                    borderColor: '#9698A8',
                  }}
                  key={thumbnail.slice(34, 47)}
                  src={thumbnail}
                  alt={thumbnail.slice(34, 47)}
                />
              );
            }
            return (
              <IG.Thumbnail
                key={thumbnail.slice(34, 47)}
                src={thumbnail}
                alt={thumbnail.slice(34, 47)}
              />
            );
          })}
          <IG.TnDownArrow onClick={nextSetThumbnail}> ⌄ </IG.TnDownArrow>
        </IG.ThumbnailSection>

        <IG.LeftArrow>
          {currIndex === 0 ? null
            : <IG.ArrowSpan onClick={prevMainImage}> 《 </IG.ArrowSpan>}
        </IG.LeftArrow>

        <IG.MainImage src={mainImages[currIndex]} alt={currStyle} />

        <IG.RightArrow>
          {currIndex === mainImages.length - 1 ? null
            : <IG.ArrowSpan onClick={nextMainImage}> 》 </IG.ArrowSpan>}
        </IG.RightArrow>
        {/* </IG.MainImageDiv> */}
      </SectionDiv.ImageGallerySection>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;