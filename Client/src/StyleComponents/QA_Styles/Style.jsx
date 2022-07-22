import styled from "styled-components";

const Style = {
  Body: styled.div`
    margin: auto;
    width: 80%;
    max-height: 800px;
    padding: 10px;
    overflow: hidden;
  `,
  SearchBar: styled.input`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 99%;
    height: 50px;
    border: 1px solid black;
    font-size: 20px;
    color: black;
    padding-left: 10px;

  `,
  Title: styled.h2`
    text-align: left;
    font-size: 18px;
    font-weight: normal;
  `,
  MoreAnsweredQuestion: styled.button`
    width: 35%;
    height: 70px;
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
  `,
  AddQuestion: styled.button`
    width: 30%;
    height: 70px;
    font-size: 18px;
    font-weight: bold;
`,

};

export default Style;

// transition