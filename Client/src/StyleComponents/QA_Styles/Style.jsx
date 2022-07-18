import styled from "styled-components";
// import SearchBar from '../../Widget/Q&A/Components/SearchBar.jsx';

const Style = {
  Body: styled.div`
    margin: auto;
    width: 60%;
    height: 600px;
    padding: 10px;
    overflow: auto;
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
    font-size: 15px;
    font-weight: normal;
    font-variant: small-caps;
  `,
  QuestionList: styled.div`
    display: inline-block;
  `,
  Questions: styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    `,
  QBody: styled.div`
    width: 60%;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    display: inline-block;

 `,
  MoreAnsweredQuestion: styled.button`
    width: 30%;
    height: 65px;
    font-size: 18px;
    font-weight: bold;
`,
  Info: styled.ul`
    font-size: 13px;
    font-weight: normal;
    display: flex;
    float: right;
    list-style: none;
  `,
};

export default Style;

// transition