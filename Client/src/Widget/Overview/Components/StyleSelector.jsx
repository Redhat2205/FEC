import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import SS from "../../../StyleComponents/Overview_Styles/SS.jsx";

const StyleSelector = ({
  styles, currStyle, setCurrStyle, setQuantity,
}) => (
  <SectionDiv.StyleSelectorSection>
    <SS.Style>
      STYLE &nbsp;
      <SS.Span>{">"}</SS.Span>
      &nbsp;&nbsp;
      <SS.StyleName>{currStyle.name}</SS.StyleName>
    </SS.Style>

    <SS.ThumbnailSection>
      {styles.map((style) => (
        <SS.Thumbnail
          key={style.style_id}
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          onClick={() => {
            setCurrStyle(style);
            // setQuantity('-');
          }}
        />
      ))}
    </SS.ThumbnailSection>
  </SectionDiv.StyleSelectorSection>
);

export default StyleSelector;
