import React, { useState } from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import ATC from "../../../StyleComponents/Overview_Styles/ATC.jsx";

const AddToCart = ({
  product, currStyle, quantity, setQuantity,
}) => {
  const defaultStock = ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const selectRef = React.useRef();
  const openOnFocus = useState(true);

  const [size, setSize] = useState(null);
  const [stock, setStock] = useState(defaultStock);
  // const [quantity, setQuantity] = useState('-');
  const [favorite, setFavorite] = useState(false);

  if (currStyle.name !== undefined) {
    const skus = Object.entries(currStyle.skus);

    // ========== Size and Quantity ============
    const selectSizeAndUpdateStock = (e) => {
      if (e.target.value === 'Select Size') {
        setStock(defaultStock);
        setQuantity('-');
      } else {
        setSize(e.target.value);
        setQuantity(1);

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

    const updateQuantity = (e) => {
      setQuantity(e.target.value);
    };

    // ========== Add to Bag and Favoirte ============
    const onClickOpenDropDown = () => {
      console.log('open dropdown!');
      console.log('selectRef.current: ', selectRef.current);

      if (selectRef.current) {
        selectRef.current.focus();
      }
    };

    const onClickAddToBag = () => {
      const unitPrice = currStyle.sale_price ? currStyle.sale_price : currStyle.original_price;

      console.log(
        `Add to Bag: 🎩
  Product: ${product.name} - ${currStyle.name}
  Unit Price: $ ${unitPrice}
  Size: ${size},
  Quantity: ${quantity}
  Total: $ ${quantity * unitPrice}
        `,
      );
    };

    const toggleFavorite = () => {
      setFavorite(!favorite);
    };

    return (
      <SectionDiv.AddToCartSection>
        <ATC.SelectSize
          id="selectSize"
          onChange={selectSizeAndUpdateStock}
          ref={selectRef}
          openOnFocus={openOnFocus}
        >
          <option> SELECT SIZE </option>
          { skus.map((sku) => (
            <option key={sku[0]}>
              {sku[1].size}
            </option>
          ))}
        </ATC.SelectSize>

        { quantity === '-'
          ? (
            <ATC.SelectQuantity>
              <option> - </option>
            </ATC.SelectQuantity>
          ) : (
            <ATC.SelectQuantity onChange={updateQuantity} value={quantity}>
              { size === null
                ? stock.map((quantityChoice, index) => (
                  <option key={index + 100}>
                    {quantityChoice}
                  </option>
                ))
                : stock.map((quantityChoice, index) => (
                  <option key={index + 200}>
                    {quantityChoice}
                  </option>
                ))}
            </ATC.SelectQuantity>
          )}

        <ATC.SecondLine>
          { size === null || size === 'SELECT SIZE'
            ? (
              <ATC.AddtoBag onClick={onClickOpenDropDown}>
                ADD TO BAG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +
              </ATC.AddtoBag>
            )
            : (
              <ATC.AddtoBag onClick={onClickAddToBag}>
                ADD TO BAG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +
              </ATC.AddtoBag>
            )}

          {favorite ? (
            <ATC.FavoriteButton onClick={toggleFavorite}>
              ★
            </ATC.FavoriteButton>
          ) : (
            <ATC.FavoriteButton onClick={toggleFavorite}>
              ☆
            </ATC.FavoriteButton>
          )}
        </ATC.SecondLine>

      </SectionDiv.AddToCartSection>
    );
  }
  return (
    <SectionDiv.AddToCartSection> loading...</SectionDiv.AddToCartSection>
  );
};

export default AddToCart;