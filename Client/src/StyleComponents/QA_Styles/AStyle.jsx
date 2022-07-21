import styled from "styled-components";

const AStyle = {
  Body: styled.div`
    max-height: 300px;
    overflow: auto
  `,
  Input: styled.span`
    font-size: 15px;
    font-weight: normal;
    margin-bottom: 25px;
`,
  A: styled.span`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 25px;
`,
  LinksList: styled.ul`
    font-size: 13px;
    font-weight: normal;
    display: -webkit-inline-box;
    list-style: none;
    margin-right: 0px;
    margin-top: 0;
    width: 40%;
  `,
  More: styled.span`
    font-size: 12px;
    font-weight: bold;
  `,
  User: styled.li`
   margin: 2px;
  `,
  Seller: styled.li`
    margin: 2px;
    font-weight: bold;
  `,
  Date: styled.li`
  margin: 2px;
  `,
  Helpful: styled.li`
  margin: 2px;
`,
  YesClicked: styled.li`
  margin: 2px;
  width: 13%;
  `,
  Yes: styled.li`
  margin-left: 5px;
  margin-right: 5px;
  width: 13%;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
  Reported: styled.li`
  margin: 2px;
  width: 28%;
  `,
  Report: styled.li`
  margin: 2px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
  PhotoList: styled.ul`
    display:inline-block;
    overflow-x: auto
  `,
};

export default AStyle;