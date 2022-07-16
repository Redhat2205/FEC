import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";
import ThumbnailSection from "./ThumbnailSection.jsx";

const ImageGallery = ({ currStyle, currView, setCurrView }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currIndex, setcurrIndex] = useState(0);
  const [currTnSet, setCurrTnSet] = useState([]);

  useEffect(() => {
    if (currStyle.name !== undefined) {
      const mainArr = [];
      const thumbnailArr = [];

      currStyle.photos.forEach((photoObj) => {
        mainArr.push(photoObj.url);
        if (photoObj.thumbnail_url[0] === 'u') {
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

  const onClickSetIndex = (thumbnail) => {
    const newIndex = thumbnails.indexOf(thumbnail);
    setcurrIndex(newIndex);
  };

  // =========== Set View ============
  const onClickDefault = () => {
    setCurrView('default');
    console.log('default view');
  };
  const onClickExpand = () => {
    setCurrView('expanded');
    console.log('expanded view');
  };
  const onClickZoom = () => {
    setCurrView('zoomed');
    console.log('zoomed view');
  };

  // ========= Expanded View ==========

  if (currIndex !== null) {
    return (
      <div>
        {/* <SectionDiv.ImageGallerySection> */}
        {/* <IG.MainImageDiv
          style={{ backgroundImage: `url(${mainImages[currIndex]})` }}
          alt={currStyle.name}
        > */}
        {currView === 'default' && (
          <SectionDiv.ImageGallerySection>
            {/* <IG.MainImageDiv
              style={{ backgroundImage: `url(${mainImages[currIndex]})` }}
              alt={currStyle.name}
            > */}
            <ThumbnailSection
              thumbnails={thumbnails}
              currIndex={currIndex}
              setcurrIndex={setcurrIndex}
              currTnSet={currTnSet}
              setCurrTnSet={setCurrTnSet}
            />
            <IG.LeftArrow>
              {currIndex === 0 ? null
                : <IG.ArrowSpan onClick={prevMainImage}> 《 </IG.ArrowSpan>}
            </IG.LeftArrow>

            <IG.MainImageDefault
              src={mainImages[currIndex]}
              alt={currStyle}
              onClick={onClickExpand}
            />

            <IG.RightArrow>
              {currIndex === mainImages.length - 1 ? null
                : <IG.ArrowSpan onClick={nextMainImage}> 》 </IG.ArrowSpan>}
            </IG.RightArrow>
            {/* </IG.MainImageDiv> */}
          </SectionDiv.ImageGallerySection>
        )}

        {currView === 'expanded' && (
          <SectionDiv.ImageGallerySection style={{ width: "98%" }}>
            <ThumbnailSection
              thumbnails={thumbnails}
              currIndex={currIndex}
              setcurrIndex={setcurrIndex}
              currTnSet={currTnSet}
              setCurrTnSet={setCurrTnSet}
            />
            <IG.LeftArrow style={{ left: '7%' }}>
              {currIndex === 0 ? null
                : <IG.ArrowSpan onClick={prevMainImage}> 《 </IG.ArrowSpan>}
            </IG.LeftArrow>

            <IG.MainImageExpanded
              src={mainImages[currIndex]}
              alt={currStyle}
              onClick={onClickZoom}
            />

            <IG.RightArrow style={{ left: '1%' }}>
              {currIndex === mainImages.length - 1 ? null
                : <IG.ArrowSpan onClick={nextMainImage}> 》 </IG.ArrowSpan>}
            </IG.RightArrow>

          </SectionDiv.ImageGallerySection>
        )}

        {currView === 'zoomed' && (
          <SectionDiv.ImageGallerySection style={{ width: "98%" }}>
            <ThumbnailSection
              thumbnails={thumbnails}
              currIndex={currIndex}
              setcurrIndex={setcurrIndex}
              currTnSet={currTnSet}
              setCurrTnSet={setCurrTnSet}
            />
            {/* <IG.LeftArrow>
              {currIndex === 0 ? null
                : <IG.ArrowSpan onClick={prevMainImage}> 《 </IG.ArrowSpan>}
            </IG.LeftArrow> */}

            <IG.MainImageZoomed
              src={mainImages[currIndex]}
              alt={currStyle}
              onClick={onClickDefault}
            />

            {/* <IG.RightArrow>
              {currIndex === mainImages.length - 1 ? null
                : <IG.ArrowSpan onClick={nextMainImage}> 》 </IG.ArrowSpan>}
            </IG.RightArrow> */}
          </SectionDiv.ImageGallerySection>
        )}
      </div>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;