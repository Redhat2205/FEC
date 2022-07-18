import styled from "styled-components";

const PAI = {
  Slogan: styled.div`
    display: inline-block;
    float: left;
    margin: 3% 0 1% 10%;
    width: 40%;
    height: 20%;
    font-weight: 700;
    font-size: 20px;
  `,
  Description: styled.div`
    float: inline-block;
    float: left;
    margin: 1% 0 1% 10%;
    width: 40%;
    height: 30%;
    font-size: 15px;
  `,
  FeatureList: styled.ul`
    float: inline-block;
    border-left: 2px solid rgb(118, 118, 118);
    float: right;
    margin: 3% 10% 2% 2%;
    width: 25%;
    height: 70%;
    font-size: 15px;
    line-height: 2;
  `,
  SocialMedia: styled.div`
    display: inline-block;
    float: left;
    margin: 0 0 0 10%;
    width: 30%
    height: 10%;
    font-size: 12px;
    font-weight: 700;
    color:  rgb(118, 118, 118);
  `,
};

export default PAI;