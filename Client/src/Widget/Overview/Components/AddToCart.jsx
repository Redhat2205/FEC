import React, { useState } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import ATC from "../../../StyleComponents/Overview_Styles/ATC.jsx";

const AddToCart = ({ currStyle }) => {
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);

  if (currStyle.name !== undefined) {
    const skus = Object.entries(currStyle.skus);

    const selectSizeAndUpdateQuantity = (e, skuID) => {
      setSize(e.target.value);
      // let currQuan = skus[]
      // console.log('target value: ', e.target.value);
    };

    return (
      <SectionDiv.AddToCartSection onChange={selectSizeAndUpdateQuantity}>
        <ATC.SelectSize>
          <option> Select Size </option>
          { skus.map((sku) => (
            <option
              key={sku[0]}
            >
              {sku[1].size}
            </option>
          ))}
        </ATC.SelectSize>

        <ATC.SelectQuantity>
          <option> - </option>
          { skus.map((sku) => (
            <option
              key={sku[0] + 100}
            >
              {sku[1].quantity}
            </option>
          ))}
        </ATC.SelectQuantity>

      </SectionDiv.AddToCartSection>
    );
  }
  return (
    <SectionDiv.AddToCartSection> loading...</SectionDiv.AddToCartSection>
  );
};

export default AddToCart;