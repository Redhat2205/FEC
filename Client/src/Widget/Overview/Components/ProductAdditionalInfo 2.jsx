import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PAI from "../../../StyleComponents/Overview_Styles/PAI.jsx";

const ProductAdditionalInfo = ({ product, currStyle }) => {
  if (product.name !== undefined) {
    return (
      <SectionDiv.ProductAdditionalInfo>
        <PAI.Slogan>
          {product.slogan}
        </PAI.Slogan>
        <PAI.FeatureList>
          {product.features.map((eachFeature, index) => (
            <li key={product.id + index}>
              &nbsp;
              {eachFeature.feature}
              :&nbsp;
              {eachFeature.value}
            </li>
          ))}
        </PAI.FeatureList>
        <PAI.Description>
          {product.description}
        </PAI.Description>

      </SectionDiv.ProductAdditionalInfo>
    );
  }
  return (
    <SectionDiv.ProductAdditionalInfo>
      Product Slogan and Description Section
    </SectionDiv.ProductAdditionalInfo>
  );
};

export default ProductAdditionalInfo;