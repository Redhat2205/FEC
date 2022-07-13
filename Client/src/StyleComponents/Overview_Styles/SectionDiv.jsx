import styled from "styled-components";

const SectionDiv = {
  ImageGallerySection: styled.div`
    width: 60%;
    height: 600px;
    /* display: flex; */
    float: left;
    background-color: #f8f8f8;
  `,
  ProductInfoSection: styled.div`
    width: 39%;
    height: 200px;
    /* display: flex; */
    float: right;
    background-color: #e0a2b7;
    font-family: 'Neue-Helvetica', 'Helvetica', 'Arial', Sans-Serif;
  `,
  StyleSelectorSection: styled.div`
    width: 39%;
    height: 200px;
    /* display: flex; */
    float: right;
    background-color: #9bd4e2;
  `,
  AddToCartSection: styled.div`
    width: 39%;
    height: 200px;
    /* display: flex; */
    float: right;
    background-color: #e7d2f3;
  `,
  ProductAdditionalInfo: styled.div`
    width: 100%;
    height: 200px;
    /* display: flex; */
    float: right;
    overflow: hidden;
    background-color: #f1f1dc;
    font-family: 'Neue-Helvetica', 'Helvetica', 'Arial', Sans-Serif;
  `,
};

export default SectionDiv;