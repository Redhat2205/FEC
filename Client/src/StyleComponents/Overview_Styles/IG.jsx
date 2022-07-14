import styled from "styled-components";

const IG = {
  // MainImage: styled.div`
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
    top: 7.5%;
    left: 3%;
    width: 12%;
    height: 85%;
    border: 3px solid grey;
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
  // MainImageDiv: styled.div`
  //   float: left;
  //   position: relative;
  //   top: 7.5%;
  //   left: 3%;
  //   width: 65%;
  //   height: 85%;
  //   background-position: center;
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   object-fit: contain;
  // `,
  MainImage: styled.img`
    float: left;
    position: relative;
    top: 7.5%;
    left: 3%;
    width: 65%;
    height: 85%;
    /* background-position: center;
    background-size: contain;
    background-repeat: no-repeat; */
    object-fit: contain;
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
    color: grey;
  `,
};

export default IG;