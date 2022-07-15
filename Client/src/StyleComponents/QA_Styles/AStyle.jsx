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
  `,
  More: styled.span`
    font-size: 12px;
    font-weight: bold;
  `,
  User: styled.li`
    margin-right: 5px;
  `,
  Date: styled.li`
    margin-right: 5px;
  `,
  Helpful: styled.li`
    margin-right: 5px;
`,
  Yes: styled.li`
    margin-right: 5px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
  Reported: styled.li`
    margin-right: 5px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
};

export default AStyle;