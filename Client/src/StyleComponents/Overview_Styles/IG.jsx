import styled from "styled-components";

const IG = {
  // MainImageDiv: styled.div`
  //   /* display: flex; */
  //   /* justify-content: flex-end; */
  //   width: 100%;
  //   height: 100%;
  //   background-position: center;
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   margin: 1% auto;
  //   object-fit: contain;
  //   /* z-index: 0; */
  // `,
  ThumbnailSection: styled.div`
    /* display: flex; */
    float: left;
    position: relative;
    top: 3px;
    left: 3%;
    width: 12%;
    height: 590px;
    /* border: 3px solid grey; */
  `,
  LeftArrow: styled.div`
    /* display: flex; */
    float: left;
    position: relative;
    top: 45%;
    left: 3%;
    width: 8%;
    height: 7%;
    /* border: 3px solid grey; */
  `,
  MainImage: styled.img`
    float: left;
    position: relative;
    top: 7.5%;
    left: 3%;
    width: 65%;
    height: 85%;
    object-fit: contain;
    transition: 1s;
  `,
  RightArrow: styled.div`
    /* display: flex; */
    float: left;
    position: relative;
    top: 45%;
    left: 3%;
    width: 8%;
    height: 7%;
    /* border: 3px solid grey; */
    text-align: center;
  `,
  ArrowSpan: styled.button`
    font-size: 25px;
    font-weight: 700;
    border: 2px;
    background-color: #f8f8f8;
    color: rgb(118, 118, 118);
  `,
  TnUpArrow: styled.button`
    position: relative;
    top: 10px;
    left: 30%;
    font-size: 25px;
    font-weight: 700;
    border: 2px;
    background-color: #f8f8f8;
    color: rgb(118, 118, 118);
  `,
  TnDownArrow: styled.button`
    position: relative;
    /* overflow: auto; */
    top: 1px;
    left: 30%;
    height: 25px;
    font-size: 35px;
    font-weight: 700;
    border: 2px;
    background-color: #f8f8f8;
    color: rgb(118, 118, 118);
  `,
  Thumbnail: styled.img`
    position: relative;
    margin: 2% 0 5% 0;
    top: 7px;
    left: 10%;
    width: 70%;
    height: 10%;
    border-radius: 10%;
    border: 2px solid grey;
`,
};

export default IG;