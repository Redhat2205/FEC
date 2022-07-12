import styled from "styled-components";

const PI = {
  Ratings: styled.div`
    display: block;
    margin: 20px 0px 20px 20px;
    width: 300px;
    height: 20px;
  `,
  AtoReview: styled.a`
    margin: 20px 20px 20px 10px;
    font-size: 12px;
    color: grey;
  `,
  Category: styled.div`
    display: block;
    margin: 20px;
    width: 300px;
    height: 20px;
    font-size: 18px;
  `,
  Name: styled.div`
    display: block;
    margin: 20px;
    width: 400px;
    height: 20px;
    font-weight: 700;
    font-size: 35px;
    /* text-align: vertical center */
  `,
  Price: styled.div`
    display: block;
    margin: 40px 20px;
    width: 300px;
    height: 20px;
    font-size: 18px;
  `,
  SalePrice: styled.div`
    display: block;
    margin: 20px;
    width: 300px;
    height: 20px;
    font-size: 18px;
    color: red;
  `,
};

export default PI;