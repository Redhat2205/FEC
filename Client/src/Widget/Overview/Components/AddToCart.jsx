import React, { useState } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import ATC from "../../../StyleComponents/Overview_Styles/ATC.jsx";

const AddToCart = ({ currStyle }) => {
  const defaultStock = ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [size, setSize] = useState(null);
  const [stock, setStock] = useState(defaultStock);
  const [quantity, setQuantity] = useState(null);

  if (currStyle.name !== undefined) {
    const skus = Object.entries(currStyle.skus);

    const selectSizeAndUpdateStock = (e) => {
      console.log('target value size: ', e.target.value);
      if (e.target.value === 'Select Size') {
        setStock(defaultStock);
        setQuantity(defaultStock[0]);
      } else {
        setSize(e.target.value);

        skus.forEach((sku) => {
          if (sku[1].size === e.target.value) {
            let newStockNum = sku[1].quantity;
            const newStockArr = [];

            if (newStockNum >= 15) {
              setStock(defaultStock.slice(1));
            } else {
              while (newStockNum > 0) {
                newStockArr.unshift(newStockNum);
                newStockNum -= 1;
              }
              setStock(newStockArr);
            }
          }
        });
      }
    };

    return (
      <SectionDiv.AddToCartSection onChange={selectSizeAndUpdateStock}>
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
          {/* <option> - </option> */}
          { size === null
            ? stock.map((quantityChoice, index) => (
              <option
                key={index + 100}
              >
                {quantityChoice}
              </option>
            ))
            : stock.map((quantityChoice, index) => (
              <option
                key={index + 200}
              >
                {quantityChoice}
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