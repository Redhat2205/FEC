import React, { useState, useEffect } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import IG from "../../../StyleComponents/Overview_Styles/IG.jsx";

const ThumbnailSection = ({
  thumbnails, currIndex, setcurrIndex, currTnSet, setCurrTnSet,
}) => {
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

  if (currIndex !== null) {
    return (
      <IG.ThumbnailSection>
        {currTnSet[0] !== thumbnails[7]
          ? <IG.TnUpArrow style={{ fontWeight: 300 }}> .. </IG.TnUpArrow>
          : <IG.TnUpArrow onClick={prevSetThumbnail}> ⌃ </IG.TnUpArrow>}

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
              onClick={() => onClickSetIndex(thumbnail)}
            />
          );
        })}
        {(thumbnails.length <= 7 || currTnSet[0] === thumbnails[7]) ? null
          : <IG.TnDownArrow onClick={nextSetThumbnail}> ⌄ </IG.TnDownArrow>}
      </IG.ThumbnailSection>
    );
  }
  return <SectionDiv.ThumbnailSection />;
};

export default ThumbnailSection;
