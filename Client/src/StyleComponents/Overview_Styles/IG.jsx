import styled from "styled-components";

const IG = {
  MainImage: styled.div`
    display: flex;
    /* justify-content: flex-end; */
    /* float: right; */
    /* width: 600px; */
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 1% auto;
    object-fit: contain;
    z-index: 0;
  `,
  ThumbnailSection: styled.div`
    display: flex;
    float: left;
    width: 20%;
    height: 80%;
    border: 3px solid grey;
    z-index: 9;
  `,
};

export default IG;