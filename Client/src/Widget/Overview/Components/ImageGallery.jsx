import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";
import ThumbnailSection from "./ThumbnailSection.jsx";

const ImageGallery = ({ currStyle, currView, setCurrView }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currIndex, setcurrIndex] = useState(0);
  const [currTnSet, setCurrTnSet] = useState([]);
  const [noImageInAPI, setNoImageInAPI] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (currStyle.name !== undefined) {
      const mainArr = [];
      const thumbnailArr = [];
      if (currStyle.photos.length === 1 && currStyle.photos[0].url === null) {
        setNoImageInAPI(true);
      } else {
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
    // console.log('default view');
  };
  const onClickExpand = () => {
    setCurrView('expanded');
    // console.log('expanded view');
  };
  const onClickZoom = (e) => {
    setCurrView('zoomed');
    setMousePosition({ x: e.pageX, y: e.pageY });
    // console.log('zoomed view');
  };

  // ========= Zoomed View ==========
  const handleMoseMove = (e) => {
    const xVal = e.pageX;
    const yVal = e.pageY;
    setMousePosition({ x: xVal, y: yVal });
    // console.log('x-y: ', mousePosition.x, mousePosition.y);
  };

  if (currIndex !== null && noImageInAPI === false) {
    return (
      <div>
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
              onClick={(e) => onClickZoom(e)}
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

            <IG.ZoomContainer>
              <IG.MainImageZoomed
                src={mainImages[currIndex]}
                alt={currStyle}
                onClick={onClickDefault}
                onMouseMove={(e) => handleMoseMove(e)}
                style={{
                  transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                  transform: 'scale(2.5)',
                }}
              />
            </IG.ZoomContainer>
          </SectionDiv.ImageGallerySection>
        )}
      </div>
    );
  }

  return <SectionDiv.ImageGallerySection />;
};

export default ImageGallery;