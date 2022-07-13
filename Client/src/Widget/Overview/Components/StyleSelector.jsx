import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import SS from "../../../StyleComponents/Overview_Styles/SS.jsx";

const StyleSelector = ({ styles, currStyle, setCurrStyle }) => (
  <SectionDiv.StyleSelectorSection>
    <SS.Style>
      Style &nbsp;
      <SS.Span>{'>'}</SS.Span>
      &nbsp;&nbsp;
      {currStyle.name}
    </SS.Style>
  </SectionDiv.StyleSelectorSection>
);

export default StyleSelector;