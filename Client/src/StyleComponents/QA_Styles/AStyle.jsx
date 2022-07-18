import styled from "styled-components";

const AStyle = {
  Body: styled.div`
    height: 100px
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
  Info: styled.ul`
    font-size: 13px;
    font-weight: normal;
    display: flex;
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
  Date: styled.li`
  margin: 2px;
  `,
  Helpful: styled.li`
  margin: 2px;
`,
  Yes: styled.li`
  margin: 2px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
  Reported: styled.li`
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