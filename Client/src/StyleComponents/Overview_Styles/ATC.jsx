import styled from "styled-components";

const ATC = {
  SelectSize: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 200px;
    height: 50px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
  `,
  SelectQuantity: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 100px;
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
    width: 250px;
    height: 50px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    background-color: white;

    /* &:hover {
      border: 2px solid;
    } */
  `,
  FavoriteButton: styled.button`
    display: inline-block;
    margin: 10px 5px;
    padding: 10px;
    width: 65px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    background-color: white;
  `,
};

export default ATC;