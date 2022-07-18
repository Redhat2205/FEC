import styled from "styled-components";

const PI = {
  Ratings: styled.div`
    display: block;
    margin: 20px 0px 20px 20px;
    width: 300px;
    height: 20px;
  `,
  Div: styled.div`
    font-size: 17px;
  `,
  Stars: styled.div`
    display: flex;
    position: relative;
  `,
  AtoReview: styled.a`
    display: flex;
    position: relative;
    left: 80px;
    bottom: 37px;
    margin: 20px 20px 20px 10px;
    width: 40%;
    font-size: 12px;
    color: grey;

    &:hover {
      font-weight: 700;
    }
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
    width: 440px;
    height: 20px;
    font-weight: 700;
    font-size: 35px;
  `,
  Price: styled.div`
    display: block;
    margin: 40px 20px;
    width: 300px;
    height: 20px;
    font-size: 18px;
  `,
  StruckthroughPrice: styled.div`
    display: inline-block;
    float: left;
    margin: 20px;
    width: 50px;
    height: 20px;
    font-size: 18px;
    text-decoration: line-through;
  `,
  SalePrice: styled.div`
    display: inline-block;
    float: center;
    margin: 20px;
    width: 100px;
    height: 20px;
    font-size: 18px;
    color: red;
  `,
};

export default PI;