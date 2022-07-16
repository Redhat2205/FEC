import styled from "styled-components";

const SS = {
  Style: styled.div`
    display: block;
    margin: 20px;
    width: 300px;
    height: 20px;
    font-weight: 700;
    font-size: 15px;
  `,
  Span: styled.span`
    display: inline-block;
    position: relative;
    bottom: 10%;
    margin: 2px;
    font-weight: 700;
    font-size: 13px;
  `,
  StyleName: styled.span`
    display: inline-block;
    margin: 3px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  `,
  ThumbnailSection: styled.div`
    margin: 20px;
    width: 300px;
    height:150px;
  `,
  Thumbnail: styled.img`
    display: inline-block;
    margin: 10px;
    width: 70px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #B2B4B8;

    &:hover{
      border: 2px solid black;;
    }
  `,
};

export default SS;