import styled from "styled-components";

const Modal = {
  Background: styled.div`
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
  `,
  PopUp: styled.div`
    width: 800px;
    height: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    position: fixed;
    z-index: 1000;
    border-radius: 10px;
    overflow: auto;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    margin: auto
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
  `,
  SubmitInput: styled.textarea`
    width: 400px;
    height: 200px;
    padding: 2 5 0 0;
  `,
  Name: styled.input`
    width: 400px
  `,
  Add: styled.div`
    display: inline;
  `,
  FormLabel: styled.div`

  `,
  PhotoContainer: styled.div`
  display: inline
  `,
};

export default Modal;