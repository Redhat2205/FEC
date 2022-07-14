import styled from "styled-components";

const AStyle = {
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
  User: styled.li`
    margin-right: 10px;
  `,
  Date: styled.li`
    margin-right: 10px;
  `,
  Helpful: styled.li`
    margin-right: 10px;
`,
  Yes: styled.li`
    margin-right: 10px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
  Reported: styled.li`
    margin-right: 10px;
    text-decoration-line: underline;
    &:hover {
    color: blue;
  }
`,
};

export default AStyle;