import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PAI from "../../../StyleComponents/Overview_Styles/PAI.jsx";

const ProductAdditionalInfo = ({ product, currStyle }) => (
  <SectionDiv.ProductAdditionalInfo>
    <PAI.Slogan>
      {product.slogan}
    </PAI.Slogan>
    <PAI.Description>
      {product.description}
    </PAI.Description>
  </SectionDiv.ProductAdditionalInfo>
);

export default ProductAdditionalInfo;