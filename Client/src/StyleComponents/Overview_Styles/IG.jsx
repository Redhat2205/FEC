import styled from "styled-components";

const IG = {
  MainImageSection: styled.div`
    display: block;
    /* justify-content: flex-end; */
    float: right;
    /* position: relative; */
    max-width: 100%;
    height: auto;
    margin: 1.5% auto;
    overflow: hidden;
`,
  MainImage: styled.img`
    display: block;
    /* justify-content: flex-end; */
    float: right;
    /* width: 600px; */
    width: 79%;
    height: 100%;
    margin: 1.5%;
    object-fit: cover;
  `,
  ThumbnailSection: styled.div`
    display: block;
    float: left;
    width: 20%;
    height: 80%;
  `,
};

export default IG;