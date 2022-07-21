import styled from "styled-components";

const ATC = {
  SelectSize: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 50%;
    max-width: 200px;
    height: 50px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
  `,
  Div: styled.div`
    margin: 0px 22px;
    font-size: 12px;
    color: red;
  `,
  SelectQuantity: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 25%;
    max-width: 100px;
    height: 50px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
  `,
  SecondLine: styled.div`
    display: block;
  `,
  AddtoBag: styled.button`
    display: inline-block;
    float: left;
    margin: 10px 20px;
    padding: 10px;
    width: 62.5%;
    max-width: 250px;
    height: 50px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    background-color: white;
  `,
  FavoriteButton: styled.button`
    display: inline-block;
    margin: 10px 5px;
    padding: 10px;
    width: 16.25%;
    max-width: 65px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    background-color: white;
  `,
};

export default ATC;