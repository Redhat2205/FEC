import styled from "styled-components";

const ATC = {
  SelectSize: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 200px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    color: grey;
  `,
  SelectQuantity: styled.select`
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 100px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    color: grey;
  `,
  AddtoBag: styled.button`
    display: inline-block;
    float: left;
    margin: 10px 20px;
    padding: 10px;
    width: 250px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    border: 1px solid;
    border-radius: 5px;
    background-color: white;
    color: grey;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export default ATC;