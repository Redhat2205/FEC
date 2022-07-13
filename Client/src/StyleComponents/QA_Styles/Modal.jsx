import styled from "styled-components";

const MODAL = {
  Background: styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    /* position: fixed; */
    justify-content: center;
    align-items: center;
  `,
  PopUp: styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    /* position: fixed; */
    z-index: 1000;
    border-radius: 10px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
  `,
  Container: styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
  `,
};

export default MODAL;