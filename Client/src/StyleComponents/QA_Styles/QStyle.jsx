import styled from "styled-components";

const QStyle = {
  Body: styled.div`
    margin: auto;
    max-height: 60%;
    padding: 10px;
    overflow-wrap: break-word;
    overflow: auto;
  `,
  Input: styled.span`
    font-size: 15px;
    font-weight: normal;
    margin-bottom: 25px;
  `,
  Info: styled.ul`
    max-width: 30%;
    font-size: 13px;
    font-weight: normal;
    display: -webkit-inline-box;
    float: right;
    list-style: none;
  `,
  QuestionList: styled.div`
    display: inline-block;
`,
  Panel: styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  `,
  Question: styled.div`
    width: 60%;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    display: inline-block;

`,
  AddAnswer: styled.li`
    min-width: 30%;
      text-decoration-line: underline;
      &:hover {
      color: blue;
    }
`,
  More: styled.span`
    font-size: 12px;
    font-weight: bold;
  `,
  Helpful: styled.li`
  `,
  YesClicked: styled.li`
    margin: 2px;
    min-width: 20%;
    text-align: right;
      text-decoration-line: underline;
      &:hover {
      color: blue;
    }
  `,
  Yes: styled.li`
    min-width: 20%;
      text-decoration-line: underline;
      &:hover {
      color: blue;
    }
  `,
  Reported: styled.li`
    width: 28%;
  `,
  Report: styled.li`
      text-decoration-line: underline;
      &:hover {
      color: blue;
    }
  `,
};

export default QStyle;