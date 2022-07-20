import styled from "styled-components";

const GeneralStyles = {
  Div: styled.div`
    font-family: 'Neue-Helvetica', 'Helvetica', 'Arial', Sans-Serif;
    max-width: 1250px;
    margin: auto;
  `,
  Nav: styled.div`
    height: 70px;
    background-image: linear-gradient(to left, #eee, grey, #333 );
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* background-color: #262626; */
  `,
  Header: styled.h1`
    display: inline-block;
    margin: 0;
    padding: 20px 20px 20px 40px;
    color: white;
    &:hover {
      cursor: pointer;
    }
  `,
};

export default GeneralStyles;