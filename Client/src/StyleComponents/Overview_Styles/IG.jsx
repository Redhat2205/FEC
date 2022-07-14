import styled from "styled-components";

const IG = {
  MainImage: styled.div`
    display: block;
    /* justify-content: flex-end; */
    /* float: right; */
    /* width: 600px; */
    width: 100%;
    height: 100%;
    background-position: bottom;
    background-size: cover;
    margin: 0 auto;
    object-fit: contain;
  `,
  ThumbnailSection: styled.div`
    display: block;
    float: left;
    width: 20%;
    height: 80%;
  `,
};

export default IG;