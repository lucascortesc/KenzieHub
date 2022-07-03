import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 18, 20, 0.7);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 369px;
  min-width: 296px;

  width: 70%;

  font-family: "Inter";

  .container__HeaderModal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(52, 59, 65, 1);

    width: 100%;
    height: 50px;

    padding: 0 18px;
  }

  .container__HeaderModal h1 {
    font-size: 12px;
    font-weight: 700;

    color: white;
  }

  .container__HeaderModal p {
    color: rgba(134, 142, 150, 1);

    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  min-height: 296px;

  padding: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: rgba(33, 37, 41, 1);

  box-sizing: border-box;
  border-radius: 4px;

  .container__Input {
    display: flex;
    flex-direction: column;

    width: 90%;

    margin-bottom: 20px;
  }

  label {
    color: rgba(248, 249, 250, 1);
  }

  input {
    width: 100%;

    outline-color: white;

    border: none;
    border-radius: 4px;

    background-color: rgba(52, 59, 65, 1);
    color: rgba(248, 249, 250, 1);

    padding-left: 15px;
  }

  button {
    width: 90%;
    height: 48px;

    font-weight: 500;
    font-size: 13px;

    color: white;
    background-color: rgba(255, 87, 127, 1);

    border: none;
    border-radius: 4px;
  }

  .erro {
    margin-bottom: 10px;
    font-size: 12px;
    color: red;
  }

  .MuiSelect-select {
    width: 100%;

    color: white;
    background-color: rgba(52, 59, 65, 1);
  }

  .MuiFormControl-root {
    margin-bottom: 26px;
  }
`;
